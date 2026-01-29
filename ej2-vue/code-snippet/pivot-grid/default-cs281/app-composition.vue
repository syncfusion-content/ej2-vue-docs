<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">Excel Export</ejs-button>
  <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowExcelExport="allowExcelExport" :gridSettings="gridSettings"> </ejs-pivotview>
  </div >
</template >
<script setup>
import { PivotViewComponent as EjsPivotview, ExcelExport } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  enableSorting: true,
  columns: [{ name: 'Year' }, { name: 'Quarter' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }, { name: 'Products' }]
};
const height = 320;
const allowExcelExport = true;
const isPrimary = true;

const gridSettings = {
  columnRender(args) {
    for (var i = 1; i < args.columns.length; i++) {
      if (args.stackedColumns[i].customAttributes &&
        args.stackedColumns[i].customAttributes.cell.valueSort.levelName === 'FY 2016.Units Sold') {
        args.stackedColumns[i].visible = false;
      }
    }
  }
};

const btnClick = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  let excelExportProperties = {
    includeHiddenColumn: false
  };
  pivotGridObj.excelExport(excelExportProperties);
};

provide('pivotview', [
  ExcelExport
]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>