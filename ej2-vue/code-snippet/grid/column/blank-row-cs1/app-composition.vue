<template>
  <div id="app">
    <ejs-grid ref="grid" id="grid" :dataSource="data" :rowDataBound='rowDataBound'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
        <e-column field='Verified' headerText='Verified' displayAsCheckBox='true' width=120> </e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { ref } from 'vue';
const grid = ref(null);
const rowDataBound = function (args) {
  let count = 0;
  let keys = Object.keys(args.data);
  for (let i = 0; i < keys.length; i++) {
    if (args.data[keys[i]] == null || args.data[keys[i]] == '' || args.data[keys[i]] == undefined) {
      count++;
    }
  }
  if (count == keys.length) {
    for (let i = 0; i < grid.value.columns.length; i++) {
      if (grid.value.columns[i].displayAsCheckBox) {
        args.row.children[i].innerHTML = '';
      }
    }
  }
}
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