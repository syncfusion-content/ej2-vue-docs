<template>
  <div id="app">
    <button id="edit" @click="clickEdit">Edit</button>
    <button id="add" @click="clickAdd">Add</button>
    <button id="delete" @click="clickDelete">Delete</button>
    <button id="updaterow" @click="clickUpdateRow">Update Row</button>
    <button id="updatecell" @click="clickUpdateCell">Update Cell</button>
    <br /><br />
    <ejs-grid ref="grid" :dataSource='data' :editSettings='editSettings' height='230px' id="Grid">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120 :isPrimaryKey='true'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
const clickAdd = function () {
  grid.value.ej2Instances.addRecord({ "OrderID": "10248", "CustomerID": "RTER", "ShipCity": "America", "ShipName": "Hanari" });
}
const clickEdit = function () {
  grid.value.ej2Instances.startEdit();
}
const clickDelete = function () {
  grid.value.ej2Instances.deleteRecord();
}
const clickUpdateRow = function () {
  grid.value.ej2Instances.updateRow(0, { OrderID: 10248, CustomerID: 'RTER', ShipCity: 'America', ShipName: 'Hanari' });
}
const clickUpdateCell = function () {
  grid.value.ej2Instances.setCellValue((grid.value.ej2Instances.currentViewData[0]).OrderID, 'CustomerID', 'Value Changed');
}
provide('grid', [Edit]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>