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
  formatSettings: [{ name: 'Amount', format: 'C' }, { name: 'Date', type: 'date', format: 'dd/MM/yyyy-hh:mm a' }],
  rows: [{ name: 'Date' }],
  columns: [{ name: 'Product_Categories', caption: 'Product Categories' }],
  values: [{ name: 'Sold', caption: 'Unit Sold' },
  { name: 'Amount', caption: 'Sold Amount' }],
  filters: [{ name: 'Products' }, { name: 'Product_ID', caption: 'Product ID' }],
  groupSettings: [{ name: 'Date', type: 'Date', groupInterval: ['Years', 'Months'], startingAt: new Date(2015, 6, 1), endingAt: new Date(2017, 6, 31) }]
};
const height = 350;
const showGroupingBar = true;
const allowGrouping = true;

provide('pivotview', [GroupingBar, Grouping]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>