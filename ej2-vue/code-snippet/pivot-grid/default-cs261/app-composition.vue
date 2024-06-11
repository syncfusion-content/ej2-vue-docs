<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showGroupingBar="showGroupingBar"
      :showFieldList="showFieldList" :load="load"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, GroupingBar, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  allowLabelFilter: true,
  allowValueFilter: true,
  columns: [{ name: 'Year', caption: 'Production Year' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }],
  rows: [{ name: 'Country' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: [],
};
const height = 350;
const showGroupingBar = true;
const showFieldList = true;

const load = (args) => {
  args.defaultFieldListOrder = 'Descending';
};

provide('pivotview', [GroupingBar, FieldList]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>