<template>
  <div id="app">
    <ejs-pivotview id="PivotTable" :height="height" :dataSourceSettings="dataSourceSettings"
      :showGroupingBar="showGroupingBar" :showFieldList="showFieldList"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, GroupingBar, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  drilledMembers: [{ name: 'Year', items: ['FY 2015'] }, { name: 'Country', items: ['France'] }],
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: []
};
const height = 350;
const showGroupingBar = true;
const showFieldList = true;

provide('pivotview', [GroupingBar, FieldList]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";

/* csslint ignore:start */
.e-pivotview .e-headercell {
  background-color: thistle !important;
}

.e-pivotview .e-rowsheader {
  background-color: skyblue !important;
}

.e-pivotview .e-valuescontent:not(.e-gtot) {
  background-color: pink !important;
}

.e-pivotview .e-gtot {
  background-color: greenYellow !important;
}

/* csslint ignore:end */
</style>