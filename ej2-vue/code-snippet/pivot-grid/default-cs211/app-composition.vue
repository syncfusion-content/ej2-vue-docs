<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :gridSettings="gridSettings">
    </ejs-pivotview>
  </div>
</template>
<script setup>
import { PivotViewComponent as EjsPivotview } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: true,
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: []
};
const height = 350;
const gridSettings = {
  columnRender: function (args) {
    if (args.stackedColumns[0]) {
      // Content for the row headers is right-aligned here.
      args.stackedColumns[0].textAlign = "Right";
    }
    if (args.stackedColumns[1]) {
      // Content for the column header "FY 2015" is center-aligned here.
      args.stackedColumns[1].textAlign = 'Center';
    }
    if (args.stackedColumns[1] && (args.stackedColumns[1].columns[0])) {
      // Content for the column header "Q1" is right-aligned here.
      (args.stackedColumns[1].columns[0]).textAlign = 'Right';
    }
    if (args.stackedColumns[1] && args.stackedColumns[1].columns[0] && (args.stackedColumns[1].columns[0]).columns[0]) {
      // Content for the value header "Units Sold" is right-aligned here.
      (args.stackedColumns[1].columns[0]).columns[0].headerTextAlign = 'Right';
    }
    if (args.stackedColumns[1] && args.stackedColumns[1].columns[0] && (args.stackedColumns[1].columns[0]).columns[0]) {
      // Content for the values are left-aligned here.
      (args.stackedColumns[1].columns[0]).columns[0].textAlign = 'Left';
    }
  }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>