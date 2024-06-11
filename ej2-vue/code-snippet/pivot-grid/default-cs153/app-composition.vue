<template>
  <div id="app">
    <ejs-pivotview :height="height" :dataSourceSettings="dataSourceSettings"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { PivotViewComponent as EjsPivotview } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  allowLabelFilter: true,
  filterSettings: [{ name: 'Amount', type: 'Number', condition: 'LessThan', value1: '40000' }],
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }],
  rows: [{ name: 'Amount', caption: 'Sold Amount' }],
  filters: [{ name: 'Country' }, { name: 'Products' }]
};
const height = 350;
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>