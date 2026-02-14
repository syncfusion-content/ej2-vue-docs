<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' :toolbar='toolbar' :created='created' height='175px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' :isPrimaryKey='true'
          width='90'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' type='string' width='100'></e-column>
        <e-column field='Freight' headerText='Freight' type='number' textAlign='Right' format='C2' width='80'></e-column>
        <e-column field='OrderDate' headerText='OrderDate' type='date' textAlign='Right' format='yMd'
          width='100'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
const toolbar = ['Print', 'Search'];
const created = function () {
  let toolbar = grid.value.ej2Instances.element.querySelector(".e-toolbar");
  grid.value.ej2Instances.element.appendChild(toolbar);
}
provide('grid', [Toolbar]);
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