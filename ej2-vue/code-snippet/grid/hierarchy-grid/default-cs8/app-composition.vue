<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='parentData' height='265px' :childGrid='childGrid' :detailDataBound='onDetailDataBound'>
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
import { data, employeeData } from './datasource.js';
import {DataManager,Query} from '@syncfusion/ej2-data';
      const parentData = employeeData;
      const childGrid = {
        columns: [
          { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
          { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
          { field: 'ShipCity', headerText: 'Ship City', width: 100 },
          { field: 'ShipName', headerText: 'Ship Name', width: 120 }
        ]
      };
    const onDetailDataBound = (args) => {
      var empIdValue = args.data['EmployeeID'];
      var childGridData = new DataManager(data).executeLocal(
        new Query().where('EmployeeID', 'equal', empIdValue, true)
      );
      args.childGrid.query = new Query();
      args.childGrid.dataSource = childGridData;
    }
  provide('grid',  [DetailRow]);
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