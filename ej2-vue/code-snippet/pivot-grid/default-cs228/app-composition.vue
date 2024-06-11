<template>
  <div id="app">
    <ejs-pivotview :height="height" :dataSourceSettings="dataSourceSettings" :showGroupingBar="showGroupingBar">
    </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, GroupingBar } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  enableSorting: true,
  sortSettings: [{ name: 'Country', order: 'Ascending', membersOrder: ['United Kingdom', 'France'] }, { name: 'Year', order: 'Descending', membersOrder: ['FY 2015', 'FY 2017'] }],
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  filters: []
};
const height = 350;
const showGroupingBar = true;

provide('pivotview', [GroupingBar]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>