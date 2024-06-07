<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :editSettings="editSettings">
    </ejs-pivotview>
  </div>
</template>
<script setup>
import { PivotViewComponent as EjsPivotview } from "@syncfusion/ej2-vue-pivotview";
import { pivot_flatdata } from './pivot_flatdata.js';

const dataSourceSettings = {
  dataSource: pivot_flatdata,
  expandAll: true,
  rows: [{ name: 'Country' }],
  columns: [{ name: 'Date' }, { name: 'Product' }],
  values: [{ name: 'Quantity', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  showColumnSubTotals: false
};
const height = 350;
const editSettings = { allowEditing: true, allowInlineEditing: true };

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>