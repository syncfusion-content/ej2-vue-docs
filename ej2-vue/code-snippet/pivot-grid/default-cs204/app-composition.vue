<template>
  <div id="app">
    <ejs-button id="chartprint" :isPrimary="isPrimary" v-on:click="printClick">Print</ejs-button>
    <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :displayOption="displayOption"
      :chartSettings="chartSettings" :height="height"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, PivotChart } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
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
  chartSeries: {
    type: 'Column'
  }
};
const isPrimary = true;

const printClick = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  pivotGridObj.printChart();
}

provide('pivotview', [PivotChart]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>