<template>
  <div id="app">
    <ejs-pivotview id="PivotView" :height="height" :dataSourceSettings="dataSourceSettings"
      :showGroupingBar="true" :showFieldList="true" :allowCalculatedField="true">
    </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, GroupingBar, FieldList, CalculatedField } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  rows: [{ name: 'Country' }, { name: 'Products' }],
  columns: [{ name: 'Year' }, { name: 'Quarter' }],
  values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Sold', caption: 'Units Sold' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }]
};
const height = 350;

provide('pivotview', [GroupingBar, FieldList, CalculatedField]);
</script>
<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pivotview/index.css';
</style>
