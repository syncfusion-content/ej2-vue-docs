<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showGroupingBar="showGroupingBar"
      :allowGrouping="allowGrouping"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, GroupingBar, Grouping } from "@syncfusion/ej2-vue-pivotview";
import { Group_Data } from './datasource.js';

const dataSourceSettings = {
  dataSource: Group_Data,
  expandAll: false,
  enableSorting: true,
  formatSettings: [{ name: 'Amount', format: 'C' }, { name: 'Product_ID', format: 'N0' },
  { name: 'Date', type: 'date', format: 'dd/MM/yyyy-hh:mm a' }],
  rows: [{ name: 'Date', caption: 'Date' }],
  columns: [{ name: 'Product_ID', caption: 'Product ID' },
  { name: 'Products', caption: 'Products' }],
  values: [{ name: 'Sold', caption: 'Unit Sold' },
  { name: 'Amount', caption: 'Sold Amount' }],
  filters: []
};
const height = 350;
const showGroupingBar = true;
const allowGrouping = true;

provide('pivotview', [GroupingBar, Grouping]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>