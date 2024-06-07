<template>
  <div id="app">
    <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height" :gridSettings="gridSettings">
    </ejs-pivotview>
  </div>
</template >
<script setup>
import { PivotViewComponent as EjsPivotview } from "@syncfusion/ej2-vue-pivotview";
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
const gridSettings = {
  queryCellInfo(args) {
    let colIndex = Number(args.cell.getAttribute('data-colindex'));
    let cells = args.data[colIndex] ? args.data[colIndex] : {};
    // Here by using 'actualText' option, a custom class can be added to the specific row header and its value to apply custom style.
    if (cells.actualText === 'Germany') {
      args.cell.classList.add('e-custom');
    } else if (cells.actualText === 'Amount' &&
      cells.columnHeaders === 'FY 2016' && cells.rowHeaders === 'Germany') {
      args.cell.classList.add('e-custom');
    }
  },
  headerCellInfo(args) {
    let customAttributes = args.cell.column.customAttributes;
    // Here custom class can be added to the specific column header by using unique level name, to apply custom style.
    if (args.node.classList.contains('e-columnsheader') && customAttributes &&
      customAttributes.cell.valueSort.levelName === 'FY 2016.Sold Amount') {
      args.node.classList.add('e-custom');
    }
  }
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>