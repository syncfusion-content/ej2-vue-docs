<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">PDF Export</ejs-button>
  <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowPdfExport="allowPdfExport" :enableVirtualization="enableVirtualization" :gridSettings="gridSettings">
</ejs-pivotview>
  </div >
</template >
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, PDFExport, VirtualScroll } from "@syncfusion/ej2-vue-pivotview";
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
const height = 320;
const allowPdfExport = true;
const isPrimary = true;
const enableVirtualization = true;
const gridSettings = {
  columnWidth: 140,
  pdfHeaderQueryCellInfo: function (args) {
    if (args.gridCell && args.gridCell.valueSort && args.gridCell.valueSort.levelName === 'FY 2015.Units Sold'
        && args.cell && args.cell.row && args.cell.row.pdfGrid && args.cell.row.pdfGrid.gridColumns
        && args.cell.row.pdfGrid.gridColumns.columns[args.gridCell.colIndex]) {
        args.cell.row.pdfGrid.gridColumns.columns[args.gridCell.colIndex].width = 250;
    }
  }
};

const btnClick = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  pivotGridObj.pdfExport();
};

provide('pivotview', [
  PDFExport,
  VirtualScroll
]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>