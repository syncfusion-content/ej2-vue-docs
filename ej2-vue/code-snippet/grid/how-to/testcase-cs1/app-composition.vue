<template>
  <div id="app">
    <ejs-grid id='Grid' :dataSource='data.slice(0, 5)' height='315'>
      <e-columns>
        <e-column field='CustomerID' headerText='CustomerID' textAlign='Right' width=90></e-column>
        <e-column field='ContactName' headerText='ContactName' width=120></e-column>
        <e-column field='Address' headerText='Address' width=150></e-column>
        <e-column field='Country' headerText='Country' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { customerData } from './datasource';
const data = customerData;
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>