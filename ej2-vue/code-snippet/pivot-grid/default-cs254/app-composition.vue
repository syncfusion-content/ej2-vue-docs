<template>
  <div id="app">
    <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings"
      :height="height" :allowExcelExport="allowExcelExport" :allowConditionalFormatting="allowConditionalFormatting"
      :allowPdfExport="allowPdfExport" :showToolbar="showToolbar" :allowNumberFormatting="allowNumberFormatting"
      :allowCalculatedField="allowCalculatedField" :showFieldList="showFieldList" :toolbar="toolbar"
      :actionComplete="actionComplete" :displayOption="displayOption"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, FieldList, CalculatedField, Toolbar, PDFExport, ExcelExport, ConditionalFormatting, NumberFormatting } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: []
};
const height = 350;
const gridSettings = { columnWidth: 140 };
const allowExcelExport = true;
const allowConditionalFormatting = true;
const allowNumberFormatting = true;
const allowPdfExport = true;
const displayOption = { view: 'Both' };
const showToolbar = true;
const allowCalculatedField = true;
const showFieldList = true;
const toolbar = [
  "New",
  "Save",
  "SaveAs",
  "Rename",
  "Remove",
  "Load",
  "Grid",
  "Chart",
  "Export",
  "SubTotal",
  "GrandTotal",
  "ConditionalFormatting",
  "NumberFormatting",
  "FieldList"
];

const actionComplete = (args) => {
  if (args.actionName == 'New report added' || args.actionName == 'Report saved') {
    // Triggers when the toolbar UI actions such as add new report and save current report icon are completed.
  }
};

provide('pivotview', [
  FieldList,
  CalculatedField,
  Toolbar,
  PDFExport,
  ExcelExport,
  ConditionalFormatting,
  NumberFormatting
]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>