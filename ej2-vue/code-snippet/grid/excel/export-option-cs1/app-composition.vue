<template>
    <div id="app">
        <div style="display: inline-block;">
            <label style="padding:  10px 10px 12px 0"> Change export type: </label> 
            <ejs-dropdownlist ref='dropdown' id='dropdownlist' index="0" width="150" :dataSource="dropDownData" :fields='fields'></ejs-dropdownlist>
        </div>
        <ejs-grid style="margin-top: 10px" ref='grid' id='Grid' :dataSource='employeeData' :toolbar='toolbarOptions' 
        height='220px' :allowPaging='true' :pageSettings='pageSettings' :allowExcelExport='true' :toolbarClick='toolbarClick'>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=90></e-column>
                <e-column field='FirstName' headerText='FirstName' width=100></e-column>
                <e-column field='LastName' headerText='Last Name' width=100></e-column>
                <e-column field='City' headerText='City' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, ExcelExport, Page } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { employeeData } from './datasource.js';

const grid = ref(null);
const dropdown = ref(null);
const fields = { text: 'text', value: 'value' };
const pageSettings = { pageSize: 6};
const dropDownData = [
    { text: 'CurrentPage', value: 'CurrentPage' },
    { text: 'AllPages', value: 'AllPages' },
];
const toolbarOptions = ['ExcelExport'];
const toolbarClick = function(args) {
    if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
        let excelExportProperties = {
            exportType: dropdown.value.$el.value,
        };
        grid.value.excelExport(excelExportProperties);
    }
}
  provide('grid',  [Toolbar, ExcelExport, Page]);
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