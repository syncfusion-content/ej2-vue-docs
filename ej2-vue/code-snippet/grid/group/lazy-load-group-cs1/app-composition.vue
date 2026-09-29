<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource="data" :allowPaging='true' :allowGrouping='true' :groupSettings='groupSettings' height='255px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign= 'Right' width='80'></e-column>
        <e-column field='ProductName' headerText='Product Name' width='100'></e-column>
        <e-column field='ProductID' headerText='Product ID' width='80'></e-column>
        <e-column field='CustomerName' headerText='Customer Name' width='100'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Group, LazyLoadGroup } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
      const groupSettings = { enableLazyLoading: true, columns: ['ProductName', 'CustomerName'] };
  provide('grid',  [Page, Group, LazyLoadGroup]);
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>