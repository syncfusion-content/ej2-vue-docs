<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">PDF Export</ejs-button>
  <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowPdfExport="allowPdfExport"> </ejs-pivotview>
  </div >
</template >
<script setup>
import { PivotViewComponent as EjsPivotview, PDFExport } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { Group_Data } from './pivotData.js';

const dataSourceSettings = {
  dataSource: Group_Data,
  expandAll: false,
  enableSorting: true,
  formatSettings: [{ name: 'Date', type: 'date', format: "EEE, MMM d, ''yy" }],
  rows: [{ name: 'Date' }],
  columns: [{ name: 'Product_Categories', caption: 'Product Categories' }],
  values: [{ name: 'Sold', caption: 'Unit Sold' },
  { name: 'Amount', caption: 'Sold Amount' }],
};
const height = 320;
const allowPdfExport = true;
const isPrimary = true;

const btnClick = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  pivotGridObj.pdfExport();
};

provide('pivotview', [
  PDFExport
]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>