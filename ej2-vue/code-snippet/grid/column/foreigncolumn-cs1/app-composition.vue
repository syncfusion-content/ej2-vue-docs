<template>
  <div id="app">
    <ejs-grid :dataSource='data' height='315'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width=100></e-column>
        <e-column field='EmployeeID' headerText='Employee Name' width=100 foreignKeyField='EmployeeID'
          foreignKeyValue='FirstName' :dataSource='employeeData'></e-column>
        <e-column field='Freight' headerText='Freight' width=80></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=130></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, ForeignKey } from "@syncfusion/ej2-vue-grids";
import { data, employeeData } from './datasource.js';

provide('grid', [ForeignKey]);
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