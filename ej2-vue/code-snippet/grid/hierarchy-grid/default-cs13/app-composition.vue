<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='parentData' height='265px' :childGrid='childGrid' :rowDataBound='rowDataBound'>
      <e-columns>
        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
        <e-column field='FirstName' headerText='FirstName' width=100></e-column>
        <e-column field='LastName' headerText='Last Name' width=100></e-column>
        <e-column field='City' headerText='City' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, DetailRow } from "@syncfusion/ej2-vue-grids";
import { DataManager, Query } from '@syncfusion/ej2-data';
import { data, employeeData } from './datasource.js';
const parentData = employeeData;
const childGrid = {
  dataSource: data,
  queryString: 'EmployeeID',
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
    { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    { field: 'ShipName', headerText: 'Ship Name', width: 120 }
  ]
};
const rowDataBound = function (args) {
  let parentData = (args.data)['EmployeeID'];
  let childrecord = new DataManager(data).executeLocal(new Query().where('EmployeeID', 'equal', parentData, true));
  if (childrecord.length === 0) {
    // Here hide which parent row has no child records
    let rowElement = args.row;
    let cellElement = rowElement.querySelector('td');
    cellElement.innerHTML = ' ';
    cellElement.className = 'e-customizedexpandcell';
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

.e-row[aria-selected="true"] .e-customizedexpandcell {
  background-color: #e0e0e0;
}

.e-grid.e-gridhover tr[role='row']:hover {
  background-color: #eee;
}
</style>