<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { PivotViewComponent as EjsPivotview } from "@syncfusion/ej2-vue-pivotview";
import { csvdata } from './csvdata.js';
import { isNullOrUndefined } from "@syncfusion/ej2-base";

const dataSourceSettings = {
  dataSource: this.getCSVData(),
  type: 'CSV',
  expandAll: false,
  formatSettings: [{ name: 'Total Cost', format: 'C0' }, { name: 'Total Revenue', format: 'C0' }, { name: 'Total Profit', format: 'C0' }],
  drilledMembers: [{ name: 'Item Type', items: ['Baby Food'] }],
  rows: [
    { name: 'Country' },
    { name: 'Region' }
  ],
  columns: [
    { name: 'Sales Channel' },
    { name: 'Item Type' }
  ],
  values: [
    { name: 'Total Cost' },
    { name: 'Total Revenue' },
    { name: 'Total Profit' }
  ],
  filters: []
};
const height = 350;

const getCSVData = () => {
  let dataSource = [];
  let jsonObject = csvdata.split(/\r?\n|\r/);
  for (let i = 0; i < jsonObject.length; i++) {
    if (!isNullOrUndefined(jsonObject[i]) && jsonObject[i] !== "") {
      dataSource.push(jsonObject[i].split(","));
    }
  }
  return dataSource;
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-pivotview/styles/tailwind3.css";
</style>