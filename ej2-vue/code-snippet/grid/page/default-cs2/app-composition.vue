<template>
  <div id="app">
    <ejs-grid :dataSource="data" :allowPaging="true" :pageSettings='pageSettings'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
const pageSettings = { pageSizes: true, pageSize: 9 };
provide('grid', [Page]);
</script>
<style>
@import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>