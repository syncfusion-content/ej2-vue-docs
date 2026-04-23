<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">PDF Export</ejs-button>
    <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height" :gridSettings="gridSettings"
      :allowPdfExport="allowPdfExport"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { PivotViewComponent as EjsPivotview, PDFExport } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  drilledMembers: [{ name: 'Country', items: ['France'] }],
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: []
};
const height = 350;
const allowPdfExport = true;
const isPrimary = true;
const gridSettings = {
  columnWidth: 140,
  pdfHeaderQueryCellInfo: function () {
    //triggers for every header cell while pdf export
  }
};
provide('pivotview', [
  PDFExport
]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>