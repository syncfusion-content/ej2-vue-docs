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
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    columns: [{ name: 'Date', showNoDataItems: true }],
    values: [{ name: 'Quantity' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country', showNoDataItems: true }, { name: 'State', showNoDataItems: true }],
    filters: [],
    emptyCellsTextContent: '**'
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
    queryCellInfo: function (args) {
        const colIndex = Number(args.cell.getAttribute('aria-colindex'));
        const currentCell = args.data[colIndex - 1];
        if (currentCell.formattedText === '**' &&
            currentCell.actualText === 'Quantity' &&
            ['Canada.New Mexico', 'United States.British Columbia'].includes(currentCell.rowHeaders)) {
            args.rowSpan = 2;
            args.colSpan = 2;
        }
    },
    pdfQueryCellInfo: function (args) {
        if (args.value === '**' &&
            args.data.actualText === 'Quantity' &&
            ['Canada.New Mexico', 'United States.British Columbia'].includes(args.data.rowHeaders)) {
            args.cell.rowSpan = 2;
            args.cell.colSpan = 2;
        }
    }
};

provide('pivotview', [
  PDFExport
]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>