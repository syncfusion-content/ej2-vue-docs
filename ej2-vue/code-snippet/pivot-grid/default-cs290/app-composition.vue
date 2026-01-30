<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :displayOption="displayOption" :chartSettings="chartSettings"
      :height="height"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, PivotChart } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: []
};
const height = 350;
const displayOption = { view: 'Chart' };
const chartSettings = {
  chartSeries: { type: 'Column' },
  primaryXAxis: { title: 'X axis title' },
  primaryYAxis: { title: 'Y axis title' },
  multiLevelLabelRender(e) {
    e.alignment = 'Near';
    e.textStyle = { 
      fontFamily: 'Bold', 
      fontWeight: '400', 
      size: '16px', 
      color: 'red' 
    };
    if (e.text === ' + United Kingdom') {
      e.text = 'Text Changed';
      e.textStyle = { 
        fontFamily: 'Bold', 
        fontWeight: '800', 
        size: '16px', 
        color: 'Blue' 
      };
    }
  }
};

provide('pivotview', [PivotChart]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>