<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource="data" :dataBound='dataBound' height='315px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=150></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=150></e-column>
        <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type='date'
          width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Resize } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
const dataBound = function () {
  grid.value.autoFitColumns(['OrderDate', 'CustomerID']);
}
provide('grid', [Resize]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>