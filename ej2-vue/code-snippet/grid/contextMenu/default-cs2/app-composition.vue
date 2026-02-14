<template>
  <div id="app">
    <ejs-grid ref='grid' id='gridcomp' :dataSource='data' :allowSelection='true' :allowPaging='true' height='265px'
      :contextMenuItems='contextMenuItems' :contextMenuClick='contextMenuClick'>
      <e-columns>
        <e-column field='EmployeeID' :isPrimaryKey='true' headerText='Employee ID' textAlign='Right' width=90></e-column>
        <e-column field='FirstName' headerText='FirstName' width=100></e-column>
        <e-column field='LastName' headerText='Last Name' width=100></e-column>
        <e-column field='City' headerText='City' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, ContextMenu, Page } from "@syncfusion/ej2-vue-grids";
import { employeeData } from './datasource.js';
const grid = ref(null);
const data = employeeData;
const contextMenuItems = [{ text: 'Copy with headers', target: '.e-content', id: 'copywithheader' }];
const contextMenuClick = function (args) {
  if (args.item.id === 'copywithheader') {
    grid.value.copy(true);
  }
}
provide('grid', [ContextMenu, Page]);
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