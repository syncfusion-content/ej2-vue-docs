<template>
  <div id="app">
    <ejs-grid :dataSource='parentData' :height='345' :childGrid='childGrid' :detailExpand='detailExpand' :detailCollapse='detailCollapse'>
      <e-columns>
        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
        <e-column field='FirstName' headerText='FirstName' width=150></e-column>
        <e-column field='City' headerText='City' width=150></e-column>
        <e-column field='Country' headerText='Country' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, DetailRow } from "@syncfusion/ej2-vue-grids";
import { data, employeeData } from './datasource.js';
const parentData = employeeData;
const childGrid = {
  dataSource: data,
  queryString: 'EmployeeID',
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'ShipCity', headerText: 'Ship City', width: 150 },
    { field: 'ShipName', headerText: 'Ship Name', width: 150 }
  ]
};
// Prevent expanding detail row.
const detailExpand = (args) =>{
  if (args.rowData.FirstName === 'Nancy') {
    args.cancel = true;
  }
}
// Prevent collapsing detail row.
const detailCollapse = (args) =>{
  if (args.rowData.FirstName === 'Andrew') {
    args.cancel = true;
  }
}
provide('grid', [DetailRow]);
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