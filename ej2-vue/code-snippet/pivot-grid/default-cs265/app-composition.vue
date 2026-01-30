<template>
  <div id="app">
    <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height" :showToolbar="showToolbar"
      :allowPdfExport="allowPdfExport" :displayOption="displayOption" :showFieldList="showFieldList" :toolbar="toolbar"
      :actionBegin="actionBegin" :enableVirtualization="enableVirtualization"> </ejs-pivotview>
  </div>
</template >
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, Toolbar, FieldList, PDFExport } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  rows: [{ name: 'Country' }, { name: 'Products' }],
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Sold', caption: 'Units Sold' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
};
const height = 350;
const displayOption = { view: 'Both' };
const toolbar = ['Grid', 'Chart', 'Export', 'FieldList'];
const showFieldList = true;
const showToolbar = true;
const allowPdfExport = true;
const enableVirtualization = true;

const actionBegin = (args) => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  if (args.actionName == 'PDF export') {
    args.cancel = true;
    pivotGridObj.pdfExport({}, false, null, false, true);
  }
};

provide('pivotview', [Toolbar, FieldList, PDFExport]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>