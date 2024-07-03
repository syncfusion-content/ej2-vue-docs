<template>
  <div id="app">
    <ejs-grid ref='grid' id='grid' :dataSource='data' height='315px'>
      <e-columns>
        <e-column field='FirstName' headerText='FirstName' width=100></e-column>
        <e-column field='LastName' headerText='Last Name' width=100></e-column>
        <e-column field='City' headerText='City' width=100></e-column>
        <e-column headerText='Change the color of row' width='120' :template="'colorPickerTemplate'" textAlign='Center'></e-column>
      </e-columns>
      <template v-slot:colorPickerTemplate>
        <div><ejs-colorpicker mode="Palette" :change="change"></ejs-colorpicker></div>
      </template>
    </ejs-grid>
  </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { ColorPickerComponent as EjsColorpicker } from '@syncfusion/ej2-vue-inputs';
import { employeeData } from './datasource.js';
import { ref } from 'vue';
const grid = ref(null);
const data = employeeData;
const change = function (args) {
  const selectedRows = grid.value.ej2Instances.getSelectedRows();
  for (const row of selectedRows) {
    row.style.backgroundColor = args.value;
  }
  grid.value.ej2Instances.clearSelection();
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