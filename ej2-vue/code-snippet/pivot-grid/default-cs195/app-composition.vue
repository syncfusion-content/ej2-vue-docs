<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :displayOption="displayOption" :chartSettings="chartSettings"
      :height="height"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, PivotChart } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  dataSource: pivotData,
  expandAll: false,
  enableSorting: true,
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: []
};
const height = 350;
const displayOption = { view: 'Chart' };
const chartSettings = {
  title: 'Sales Analysis', value: 'Amount', chartSeries: { type: 'Column' },
  enableMultipleAxis: true, showPointColorByMembers: true, multipleAxisMode: 'Stacked',
  primaryYAxis: { border: { width: '0' } }
};

provide('pivotview', [PivotChart]);
</script>
<style>@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";</style>