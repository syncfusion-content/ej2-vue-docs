<template>
  <div id="app">
    <button id="add" @click="clickRow">Add Row</button>
    <br /><br />
    <ejs-grid ref="grid" :dataSource="data" :editSettings='editSettings'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90 isPrimaryKey="true"></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=120> </e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
const clickRow = function () {
  grid.value.ej2Instances.addRecord(
    { OrderID: 3232, CustomerID: 'ALKIT', Freight: 40, ShipCity: 'London' }, 2);
}
provide('grid', [Page, Edit]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>