<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">PDF Export</ejs-button>
  <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowPdfExport="allowPdfExport" :gridSettings="gridSettings"> </ejs-pivotview>
  </div >
</template >
<script setup>
import { PivotViewComponent as EjsPivotview, PDFExport } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
    dataSource: pivotData,
    expandAll: true,
    drilledMembers: [{ name: 'Year', items: ['FY 2015'] }],
    columns: [{ name: 'Year', caption: 'Production Year' }],
    rows: [{ name: 'Country' }, { name: 'Products' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    filters: []
};

const height = 320;
const allowPdfExport = true;
const isPrimary = true;

const btnClick = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  pivotGridObj.pdfExport();
};

const gridSettings = {
  columnWidth: 140,
  if (args.cell && args.cell.row && args.cell.row.pdfGrid) {
    args.cell.row.pdfGrid.repeatHeader = false;
  }
};

provide('pivotview', [
  PDFExport
]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>