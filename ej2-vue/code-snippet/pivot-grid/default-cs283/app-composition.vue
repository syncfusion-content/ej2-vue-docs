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
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
};
const height = 320;
const allowExcelExport = true;
const isPrimary = true;

const gridSettings = {
    excelQueryCellInfo: function (args) {
        if (args.cell && args.cell.actualText === 'Sold') {
            if (args.value < 700) {
                args.style = {
                    backColor: '#df3800',
                    fontName: 'Biome',
                    fontColor: '#FFFFFF',
                    borders: { color: '#8B1E00', lineStyle: 'thin' }
                };
            }
            else {
                args.style = {
                    backColor: '#00A45A',
                    fontName: 'Nirmala UI',
                    fontColor: '#FFFFFF',
                    borders: { color: '#00663A', lineStyle: 'thin' }
                };
            }
        }
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
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>