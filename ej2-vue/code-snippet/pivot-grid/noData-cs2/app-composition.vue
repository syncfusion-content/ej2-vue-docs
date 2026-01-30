<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { PivotViewComponent as EjsPivotview } from "@syncfusion/ej2-vue-pivotview";
import { noData } from './noData.js';

const dataSourceSettings = {
  dataSource: noData,
  expandAll: true,
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  columns: [{ name: 'Date', showNoDataItems: true }],
  values: [{ name: 'Quantity', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country', showNoDataItems: true }, { name: 'State', showNoDataItems: true }],
  filters: [],
  emptyCellsTextContent: '**'
};
const height = 350;

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>