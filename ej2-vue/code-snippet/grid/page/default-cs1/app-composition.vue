<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource="data" :allowPaging="true" :pageSettings='pageSettings' height=323 :load='load'>
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
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
const grid = ref(null);
      const pageSettings = { pageSize: 5 };
    const load = function() {
      let rowHeight = grid.value.ej2Instances.getRowHeight();  //height of the each row
      let gridHeight = grid.value.height;  //grid height
      let pageSize = grid.value.pageSettings.pageSize;   //initial page size
      let pageResize = (gridHeight - (pageSize * rowHeight)) / rowHeight; //new page size is obtained here
      grid.value.pageSettings = {pageSize: pageSize + Math.round(pageResize)};
    }
  provide('grid',  [Page]);
</script>
<style>
 @import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>