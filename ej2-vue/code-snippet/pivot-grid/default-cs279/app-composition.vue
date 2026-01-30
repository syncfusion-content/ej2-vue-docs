<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">Excel Export</ejs-button>
  <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowExcelExport="allowExcelExport"> </ejs-pivotview>
  </div >
</template >
<script setup>
import { PivotViewComponent as EjsPivotview, ExcelExport } from "@syncfusion/ej2-vue-pivotview";
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
const allowExcelExport = true;
const isPrimary = true;

const btnClick = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  pivotGridObj.excelExport();
};

provide('pivotview', [
  ExcelExport
]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>