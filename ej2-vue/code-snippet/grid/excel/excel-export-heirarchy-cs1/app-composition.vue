<template>
    <div id="app">
      <div style="display: inline-block;">
        <label style="padding:  10px 10px 12px 0"> Change the hierarchy export mode: </label> 
        <ejs-dropdownlist ref='dropdown' id='dropdownlist' index="0" width="150" :dataSource="ddlData" :fields='fields'></ejs-dropdownlist>
      </div>
      <ejs-grid ref='grid' id='Grid' :dataSource='parentData' :childGrid='childGrid' :toolbar='["ExcelExport"]' 
      :toolbarClick='toolbarClick' :allowExcelExport='true' style="margin-top: 10px">
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
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, DetailRow, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { data, employeeData } from './datasource.js';
const grid = ref(null);
const dropdown = ref(null);
const parentData = employeeData;
const fields = { text: 'text', value: 'value' };
const ddlData = [
  { text: 'Expanded', value: 'Expanded' },
  { text: 'All', value: 'All' },
  { text: 'None', value: 'None' }
];
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
const toolbarClick = function( args) {
  if (args.item.id === 'Grid_excelexport') {
      var exportProperties = {
        hierarchyExportMode: dropdown.value.$el.value,
      };
      grid.value.excelExport(exportProperties);
  }
}
  provide('grid',  [DetailRow, Toolbar, ExcelExport]);
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