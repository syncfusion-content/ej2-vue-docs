<template>
  <div id="app">
    <div style="display: flex; align-items: center; padding-bottom: 20px;">
      <label style="margin-right: 20px;" ><h4>Select Mode</h4></label>
      <ejs-dropdownlist width="200px" index="0" ref="sample" :dataSource='dropdownData' :change='onModeChange' popupHeight='220px'></ejs-dropdownlist>
    </div>
    <ejs-grid ref="grid" :dataSource='employeeData' height='265px' :childGrid='childGrid' :toolbar='["Print"]' :hierarchyPrintMode='hierarchyPrintMode'>
      <e-columns>
        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
        <e-column field='FirstName' headerText='FirstName' width=150></e-column>
        <e-column field='LastName' headerText='Last Name' width=150></e-column>
        <e-column field='City' headerText='City' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { ref, provide } from "vue";
import {GridComponent as EjsGrid,ColumnsDirective as EColumns,ColumnDirective as EColumn,Toolbar,Page,DetailRow} from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { data, employeeData } from "./datasource.js";
const dropdownData = ["All", "Expanded", "None"];
const hierarchyPrintMode = ref("All");
const childGrid = {
  dataSource: data,
  queryString: "EmployeeID",
  columns: [
    {
      field: "OrderID",
      headerText: "Order ID",
      textAlign: "Right",
      width: 120,
    },
    { field: "CustomerID", headerText: "Customer ID", width: 150 },
    { field: "ShipCity", headerText: "Ship City", width: 150 },
    { field: "ShipName", headerText: "Ship Name", width: 150 },
  ],
};
const onModeChange = (args) => {
  hierarchyPrintMode.value = args.value;
};
provide("grid", [Page, Toolbar, DetailRow]);
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