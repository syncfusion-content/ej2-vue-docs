<template>
  <div id="app">
    <ejs-grid ref="grid" id='pagerAtTop' :dataSource='data' :allowPaging='true' :dataBound='dataBound'
      height='268px' :pageSettings='pageSettings'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
const grid = ref(null);
const pageSettings = { pageSizes: true, pageSize: 12  };
let initialGridLoad= true;

const dataBound=function() {
  if (initialGridLoad) {
    const pager = document.getElementsByClassName("e-gridpager");
    let topElement;
    if ( grid.value.ej2Instances.allowGrouping ||  grid.value.ej2Instances.toolbar) {
        topElement =  grid.value.ej2Instances.allowGrouping? document.getElementsByClassName("e-groupdroparea"): document.getElementsByClassName("e-toolbar");
    } else {
      topElement = document.getElementsByClassName("e-gridheader");
    }
    grid.value.$el.insertBefore(pager[0], topElement[0]);
    initialGridLoad = false;

  }
}
  provide('grid',  [Page]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>