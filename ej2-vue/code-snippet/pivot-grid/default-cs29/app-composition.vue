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
  expandAll: true,
  drilledMembers: [{ name: 'Country', items: ['France'] }],
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: []
};
const height = 350;

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>