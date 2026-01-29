<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">Excel Export</ejs-button>
    <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowExcelExport="allowExcelExport" :enableVirtualization="enableVirtualization" :exportComplete="exportComplete">
    </ejs-pivotview>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, VirtualScroll, ExcelExport } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: true,
  drilledMembers: [{ name: 'Country', items: ['France'] }],
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  rows: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  values: [{ name: 'Country' }, { name: 'Products' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: []
};
const height = 320;
const allowExcelExport = true;
const enableVirtualization = true;
const isPrimary = true;

provide('pivotview', [
  VirtualScroll,
  ExcelExport
]);

const exportComplete = (args) => {
  args.promise.then(function (e) {
    console.log(e.blobData);
  });
};
const btnClick = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  let excelExportProperties = {
    fileName: 'excelexport.xlsx'
  };
  pivotGridObj.excelExport(excelExportProperties, false, null, true);
};


</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>