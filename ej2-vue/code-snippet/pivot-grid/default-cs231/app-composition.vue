<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showGroupingBar="showGroupingBar"
      :showFieldList="showFieldList" :actionBegin="actionBegin"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, GroupingBar, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: []
}
const height = 350;
const showGroupingBar = true;
const showFieldList = true;

const actionBegin = (args) => {
  if (args.actionName == 'Sort field' || args.actionName == 'Sort value') {
    args.cancel = true;
  }
};

provide('pivotview', [GroupingBar, FieldList]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>