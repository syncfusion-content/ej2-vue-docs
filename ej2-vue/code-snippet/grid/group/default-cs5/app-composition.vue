<template>
  <div id="app">
    <ejs-grid :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' height='300px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='OrderDate' headerText='Order Date' format='yMMM' :enableGroupByFormat='true' width=100
          type='date'></e-column>
        <e-column field='Freight' headerText='Freight' format='C2' :enableGroupByFormat='true' width=80></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Group } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const groupOptions = { columns: ['OrderDate', 'Freight'] };
provide('grid', [Group]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>