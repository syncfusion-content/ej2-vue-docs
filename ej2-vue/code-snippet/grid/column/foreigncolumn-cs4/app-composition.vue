<template>
  <div id="app">
    <ejs-grid :dataSource='data' height='315'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
        <e-column field='Employee.EmployeeID' headerText='Employee Name' width=120 foreignKeyValue='FirstName'
          foreignKeyField='EmployeeID' :dataSource='employeeData'></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' width=80></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=130></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, ForeignKey } from "@syncfusion/ej2-vue-grids";
import { data, employeeData } from './datasource.js';
const employeeData = employeeData;
provide('grid', [ForeignKey]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>