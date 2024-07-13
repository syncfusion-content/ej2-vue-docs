<template>
  <div id='app'>
    <div style='display: flex'>
      <label style='padding:  10px 10px 12px 0'> Align the text for columns: </label>
      <ejs-dropdownlist ref='dropdown' id='dropdownlist' style='margin-top:5px' index='0' width='150'
        :dataSource='alignmentData' :fields='fields' :change='change'></ejs-dropdownlist>
    </div>
    <ejs-grid ref='grid' id='grid' :dataSource='data' height='315'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' format='C2' width=80></e-column>
        <e-column field='OrderDate' headerText='Order Date' format='yMd' textAlign='Right' width=80></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';
import { ref } from 'vue';
const grid = ref(null);
const fields = { text: 'text', value: 'value' };
const alignmentData = [
  { text: 'Left', value: 'Left' },
  { text: 'Right', value: 'Right' },
  { text: 'Center', value: 'Center' },
  { text: 'Justify', value: 'Justify' },
];
const change = function (args) {
  grid.value.ej2Instances.columns.forEach(col => {
    col.textAlign = args.value;
  });
  grid.value.refreshColumns();
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind.css';
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>