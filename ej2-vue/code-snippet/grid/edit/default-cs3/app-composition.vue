<template>
  <div id="app">
    <button v-on:click="btnClick">Grid is Addable</button>
    <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' :cellEdit="cellEdit"
      :beforeBatchAdd="beforeBatchAdd" :beforeBatchDelete="beforeBatchDelete" height='240px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
        <e-column field='Role' headerText='Role' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' editType='numericedit' width=120
          format='C2'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { employeeData } from './datasource.js';
const data = employeeData;
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const isAddable = true;
const cellEdit = function (args) {
  if (args.rowData["Role"] === "Employee") {
    args.cancel = true;
  }
}
const beforeBatchAdd = function (args) {
  if (!this.isAddable) {
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
  this.isAddable = !this.isAddable;
}
provide('grid', [Page, Edit, Toolbar]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>