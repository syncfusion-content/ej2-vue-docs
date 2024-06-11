<template>
  <div id="app">
    <ejs-grid :dataSource='data' height='315px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' :customAttributes="customAttributes" width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
        <e-column field='OrderDate' headerText='Order Date' textAlign='Right' type='date' format='yMd'
          width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const customAttributes = { class: 'customcss' };
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";

.e-grid .e-rowcell.customcss {
  background-color: #ecedee;
  color: 'red';
  font-family: 'Bell MT';
  font-size: 20px;
}

.e-grid .e-headercell.customcss {
  background-color: #2382c3;
  color: white;
  font-family: 'Bell MT';
  font-size: 20px;
}
</style>