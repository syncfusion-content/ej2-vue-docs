<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :displayOption="displayOption"
      :chartSeriesCreated="chartSeriesCreated" :chartSettings="chartSettings" :height="height"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, PivotChart } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: []
};
const height = 350;
const displayOption = { view: 'Chart' };
const chartSettings = { chartSeries: { type: 'Column' } };

const chartSeriesCreated = (args) => {
  for (let pos = 0; pos < args.series.length; pos++) {
    if (pos % 2 == 0) {
      args.series[pos].visible = false;
    }
  }
};

provide('pivotview', [PivotChart]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>