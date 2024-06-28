<template>
  <div id="app">
    <ejs-button v-on:click.native="btnClick">Grid is Addable</ejs-button >
    <div style="padding-top:20px">
      <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' :actionBegin="actionBegin" >
        <e-columns>
          <e-column field='EmployeeID' headerText='Employee ID' textAlign= 'Right'  isPrimaryKey='true'  :validationRules='orderIDRules' width=100>
          </e-column>
          <e-column field='EmployeeName' headerText='Employee Name' :validationRules='customerNameRules' width=120 format= 'C2'></e-column>
          <e-column field='Role' headerText='Role' :validationRules='roleIDRules' width=120></e-column>
          <e-column field='EmployeeCountry' headerText='Employee Country' :validationRules='employeeCountryIDRules' editType= 'dropdownedit' width=150></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { employeeData } from './datasource.js';
const data= employeeData ;
const orderIDRules = { required: true };
const employeeCountryIDRules = { required: true };
const roleIDRules = { required: true, minLength: 5 };
const customerNameRules ={ required: true };
const editSettings= { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
const toolbar= ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const isAddable= true
const actionBegin= function (args) {
      if (args.requestType === "beginEdit" && args.rowData["Role"] == "Admin") {
          args.cancel = true;
      }
      if (args.requestType === "delete" && args.data[0]["Role"] === "Admin") {
          args.cancel = true;
      }
      if (args.requestType === "add") {
        if (!isAddable) {
          args.cancel = true;
        }
      }
    };
const btnClick= function (args) {
      args.target.innerText === "Grid is Addable" ? (args.target.innerText = "Grid is Not Addable") : (args.target.innerText = "Grid is Addable");
      this.isAddable = !isAddable;
    };
provide('grid', [Page, Edit, Toolbar]);
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