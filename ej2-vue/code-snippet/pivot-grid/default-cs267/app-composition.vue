<template>
  <div id="app">
    <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height"
      :aggregateCellInfo="aggregateCell" :showFieldList="showFieldList"> </ejs-pivotview>
  </div>
</template >
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);
  return (
    ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2)
  );
}
const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  rows: [{ name: 'Country' }, { name: 'Products' }],
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Sold', caption: 'Units Sold' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
}
const height = 350;
const showFieldList = true;

const aggregateCell = (args) => {
  if (args.fieldName === 'Sold') {
    args.value = secondsToHms(args.value);
  }
};

provide('pivotview', [FieldList]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>