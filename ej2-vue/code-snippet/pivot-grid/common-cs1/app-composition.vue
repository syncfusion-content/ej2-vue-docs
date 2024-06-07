<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { PivotViewComponent as EjsPivotview } from "@syncfusion/ej2-vue-pivotview";

const dataSourceSettings = {
  url: 'https://cdn.syncfusion.com/data/sales-analysis.json',
  expandAll: false,
  rows: [
    { name: 'EnerType', caption: 'Energy Type' },
  ],
  columns: [
    { name: 'EneSource', caption: 'Energy Source' }
  ],
  values: [
    { name: 'PowUnits', caption: 'Units (GWh)' },
    { name: 'ProCost', caption: 'Cost (MM)' }
  ],
  filters: []
};
const height = 350; 
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-pivotview/styles/material.css";
</style>