<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' height='200px' :allowGrouping='true' :groupSettings='groupOptions'
      :toolbar='toolbar' :toolbarClick='clickHandler'>
      <e-columns>
        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
        <e-column field='FirstName' headerText='First Name' width=100></e-column>
        <e-column field='Country' headerText='Country' width=100></e-column>
        <e-column field='PostalCode' headerText='Postal Code' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Group } from "@syncfusion/ej2-vue-grids";
import { employeeData } from './datasource.js';
const grid = ref(null);
const data = employeeData;
const toolbar = [
  { text: 'Expand All', tooltipText: 'Expand All', prefixIcon: 'e-expand', id: 'expandall' },
  { text: 'Collapse All', tooltipText: 'collection All', prefixIcon: 'e-collapse-2', id: 'collapseall', align: 'Right' },
  { text: 'Search', align: 'Center' }
];
const groupOptions = { columns: ['FirstName'] };
const clickHandler = function (args) {
  if (args.item.id === 'expandall') {
    grid.value.ej2Instances.groupModule.expandAll();
  }
  if (args.item.id === "collapseall") {
    grid.value.ej2Instances.groupModule.collapseAll();
  }
}
provide('grid', [Toolbar, Group]);
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