<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource="data" :keyPressed="keyPressed" :allowGrouping='true' :toolbar="toolbar"
      :editSettings='editSettings' :selectionSettings='selectionSettings'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=140></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit, Group } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null)
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const selectionSettings = { type: 'Multiple' };
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };

const keyPressed = function (e) {
  const key = e.key.toLowerCase();
  switch (key) {
    case 'n':
      e.preventDefault();
      grid.value.addRecord();
      break;
    case 's':
      if (e.ctrlKey) {
        e.preventDefault();
        grid.value.endEdit();
      }
      break;
    case 'd':
      if (e.ctrlKey) {
        e.preventDefault();
        grid.value.deleteRecord();
      }
      break;
    case 'a':
      if (e.ctrlKey) {
        e.preventDefault();
        grid.value.selectRowsByRange(0);
      }
      break;
    case 'g':
      if (e.ctrlKey) {
        e.preventDefault();
        grid.value.groupColumn('CustomerID');
      }
      break;
    case 'enter':
      e.preventDefault();
      e.cancel = true;
      grid.value.refreshColumns();
      break;
    case 'insert':
      e.preventDefault();
      e.cancel = true;
      break;
    case 'delete':
      e.preventDefault();
      e.cancel = true;
      break;
    case 'f2':
      e.preventDefault();
      e.cancel = true;
      break;
    case ' ':
      if (e.ctrlKey) {
        e.preventDefault();
        e.cancel = true;
      }
      break;
    // Add more custom shortcuts as needed
  }
};
provide('grid', [Group, Toolbar, Edit]);
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