<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' :showColumnMenu='true' height='315px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' format='C2' width=90></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, ColumnMenu } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
provide('grid', [ColumnMenu]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";

.e-grid .e-columnheader .e-icons.e-columnmenu::before {
  content: "\e941";
}
</style>