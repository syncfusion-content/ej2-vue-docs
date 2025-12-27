<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">Excel Export</ejs-button>
  <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowExcelExport="allowExcelExport" :beforeExport="beforeExport"> </ejs-pivotview>
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
  values: [{ name: 'Sold' }],
  rows: [{ name: 'Country' }, { name: 'Products' }]
};
const height = 320;
const allowExcelExport = true;
const isPrimary = true;

const btnClick = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  pivotGridObj.excelExport();
};

const beforeExport = (args) => {
  for (var i = 0; i < args.dataCollections.length; i++) {
    var pivotValue = args.dataCollections[i];
      for (var j = 0; j < pivotValue.length; j++) {
        var row = pivotValue[j];
          if (row) {
            pivotValue[j] = row.filter(function (item) {
              return item !== null && (item.axis !== 'row');
            });
          }
      }
  }
};

provide('pivotview', [
  ExcelExport
]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>