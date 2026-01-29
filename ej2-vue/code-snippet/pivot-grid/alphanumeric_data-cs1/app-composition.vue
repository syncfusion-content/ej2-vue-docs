<template>
  <div id="app">
    <ejs-pivotview :height="height" :dataSourceSettings="dataSourceSettings" :showGroupingBar="showGroupingBar">
    </ejs-pivotview>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, GroupingBar } from "@syncfusion/ej2-vue-pivotview";
import { alphanumeric_data } from './alphanumeric_data.js';

const dataSourceSettings = {
  dataSource: alphanumeric_data,
  rows: [{ name: 'ProductID', dataType: 'number' }],
  columns: [{ name: 'Country' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: []
};
const height = 350;
const showGroupingBar = true;
provide('pivotview', [GroupingBar]);

</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>