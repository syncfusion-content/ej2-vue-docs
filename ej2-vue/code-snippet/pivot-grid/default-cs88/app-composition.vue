<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { PivotViewComponent as EjsPivotview } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  filters: []
};
const height = 350;
</script>
<style>
@import "../ej2-material3-theme/styles/pivotview/index.css";
</style>