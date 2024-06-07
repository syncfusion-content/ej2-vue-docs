<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showGroupingBar="showGroupingBar"
      :showFieldList="showFieldList"> </ejs-pivotview>
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
  fieldMapping: [
    { name: 'Quarter', showSortIcon: false },
    { name: 'Products', showFilterIcon: false, showRemoveIcon: false },
    { name: 'Amount', showValueTypeIcon: false, caption: 'Sold Amount' },
  ]
};
const height = 350;
const showGroupingBar = true;
const showFieldList = true;

provide('pivotview', [GroupingBar, FieldList]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-pivotview/styles/material.css";
</style>