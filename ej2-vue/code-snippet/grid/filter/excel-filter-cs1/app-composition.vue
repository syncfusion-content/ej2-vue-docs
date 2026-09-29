<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :allowPaging='true' :pageSettings='pageSettings' :allowFiltering="true" :filterSettings="filterOptions" height="200px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="80"></e-column>
        <e-column field="CustomerID" headerText="CustomerID" width="90"></e-column>
        <e-column field="Freight" headerText="Freight" width="80"></e-column>
        <e-column field="OrderDate" headerText="OrderDate" width="120" format="yMd"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
provide('grid', [Filter, Page]);

const filterOptions = { type: "Excel" };
const pageSettings = { pageSize: 6 };
</script>

<style>
 @import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>