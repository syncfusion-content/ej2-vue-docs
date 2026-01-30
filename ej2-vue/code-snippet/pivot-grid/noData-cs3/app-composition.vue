<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :load="load"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { PivotViewComponent as EjsPivotview } from "@syncfusion/ej2-vue-pivotview";
import { noData } from './noData.js';

const dataSourceSettings = {
  dataSource: noData,
  expandAll: true,
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  columns: [{ name: 'Date' }],
  values: [{ name: 'Quantity', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }, { name: 'State' }],
  filters: [],
  emptyCellsTextContent: '**'
};
const height = 350;

const load = (args) => {
  args.dataSourceSettings.emptyCellsTextContent = "###";
  args.dataSourceSettings.columns[0].caption = "Full Year";
  args.dataSourceSettings.expandAll = false;
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>