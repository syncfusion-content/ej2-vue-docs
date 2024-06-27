<template>
  <div id="app">
    <ejs-button v-on:click="btnClick">Grid is Addable</ejs-button>
    <div style="padding-top:20px">
      <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' :cellEdit="cellEdit" :beforeBatchAdd="beforeBatchAdd" :beforeBatchDelete="beforeBatchDelete" height='240px'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100 :validationRules='orderIDRules'></e-column>
          <e-column field='Role' headerText='Role' width=120 :validationRules='roleRules'></e-column>
          <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2' :validationRules='freightIDRules'></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150 :validationRules='shipCountryRules'></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { employeeData } from './datasource.js';
const data = employeeData;
const orderIDRules = { required: true };
const shipCountryRules = { required: true };
const roleRules = { required: true};
const freightIDRules  = { required: true, min: 1, max: 1000 };
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
let isAddable = true;

const cellEdit = function (args) {
  if (args.rowData["Role"] === "Employee") {
    args.cancel = true;
  }
}

const beforeBatchAdd = function (args) {
  if (!isAddable) {
    args.cancel = true;
  }
}

const beforeBatchDelete = function (args) {
  if (args.rowData["Role"] === "Employee") {
    args.cancel = true;
  }
}

const btnClick = function (args) {
  args.target.innerText === "Grid is Addable" ? (args.target.innerText = "Grid is Not Addable") : (args.target.innerText = "Grid is Addable");
  isAddable = !isAddable;
}

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
