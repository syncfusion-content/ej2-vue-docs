<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">Excel Export</ejs-button>
    <label>Select a degree:</label>
    <ejs-dropdownlist ref='dropdown' id='dropdownlist' :dataSource='degree' placeholder='Select a degree' width="150"></ejs-dropdownlist>
    <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowExcelExport="allowExcelExport" :gridSettings="gridSettings"> </ejs-pivotview>
  </div >
</template >
<script setup>
import { PivotViewComponent as EjsPivotview, ExcelExport } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { pivotData } from './pivotData.js';

const degree = [90, 135, 180, 270];
const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  enableSorting: true,
  columns: [{ name: 'Year' }],
  values: [{ name: 'Sold' }],
  rows: [{ name: 'Country' }, { name: 'Products' }]
};
const height = 320;
const allowExcelExport = true;
const isPrimary = true;

const gridSettings = {
  excelHeaderQueryCellInfo: function (args) {
    let dropDownListObject = document.getElementById('dropdownlist').ej2_instances[0];
    args.style = { rotation: dropDownListObject.value };
  },
  excelQueryCellInfo: function (args) {
    let dropDownListObject = document.getElementById('dropdownlist').ej2_instances[0];
    args.style = { rotation: dropDownListObject.value };
  }
};

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