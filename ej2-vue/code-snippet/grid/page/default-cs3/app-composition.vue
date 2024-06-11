<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource="data" :allowPaging="true" :pageSettings='pageSettings' :toolbar='toolbar'
      :dataBound='dataBound'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
const grid = ref(null);
const initialGridLoad = true;
const pageSettings = { pageSizes: true, pageSize: 9 };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel']
const dataBound = function () {
  if (initialGridLoad) {
    initialGridLoad = false;
    let pager = document.getElementsByClassName('e-gridpager');
    let topElement;
    console.log('allowGroping n toolbar', grid.value);
    if (grid.value.allowGrouping || grid.value.toolbar) {
      topElement = grid.value.allowGrouping ? document.getElementsByClassName('e-groupdroparea') :
        document.getElementsByClassName('e-toolbar');
    } else {
      topElement = document.getElementsByClassName('e-gridheader');
    }
    console.log('insetBefore', grid.value.$el);
    grid.value.$el.insertBefore(pager[0], topElement[0]);
  }
}
provide('grid', [Page, Toolbar]);
</script>
<style>
@import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>