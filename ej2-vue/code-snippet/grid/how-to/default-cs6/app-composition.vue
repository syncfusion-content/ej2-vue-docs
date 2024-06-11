<template>
  <div id="app">
    <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='265px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' :isPrimaryKey='true' textAlign='Right' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Center' editType='numericedit' :edit='numericParams'
          width=80></e-column>
        <e-column field='ShipCity' headerText='Ship City' editType='dropdownedit' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const numericParams = {
  params: {
    validateDecimalOnType: true,
    decimals: 0,
    format: "N"
  }
};
provide('grid', [Edit, Toolbar]);
</script>
<style>@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";</style>