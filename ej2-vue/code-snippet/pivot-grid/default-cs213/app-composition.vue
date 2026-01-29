<template>
  <div id="app">
    <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height" :dataBound="trend"
      :showGroupingBar="showGroupingBar"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, GroupingBar } from "@syncfusion/ej2-vue-pivotview";
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
const showGroupingBar = true;

const trend = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  if (pivotGridObj.showGroupingBar) {
    let columns = [];
    for (let i = 1; i < (pivotGridObj.grid).columnModel.length; i++) {
      columns.push((pivotGridObj.grid).columnModel[i].field);
    }
    pivotGridObj.grid.autoFitColumns(columns);
  }
};
provide('pivotview', [GroupingBar]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>