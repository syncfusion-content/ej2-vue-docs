<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">PDF Export</ejs-button>
    <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowPdfExport="allowPdfExport"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { PivotViewComponent as EjsPivotview } from "@syncfusion/ej2-vue-pivotview";
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
}
const height = 320
const allowPdfExport = true
const isPrimary = true

const btnClick = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  let pdfExportProperties = {
    header: {
      fromTop: 0,
      height: 130,
      contents: [
        {
          type: 'Text',
          value: "Pivot Table",
          position: { x: 0, y: 50 },
          style: { textBrushColor: '#000000', fontSize: 13, dashStyle: 'Solid', hAlign: 'Center' }
        }
      ]
    },
    footer: {
      fromBottom: 160,
      height: 150,
      contents: [
        {
          type: 'PageNumber',
          pageNumberType: 'Arabic',
          format: 'Page {$current} of {$total}',
          position: { x: 0, y: 25 },
          style: { textBrushColor: '#02007a', fontSize: 15 }
        }
      ]
    }
  };
  pivotGridObj.pdfExport(pdfExportProperties);
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>