<template>
  <div id="app">
    <ejs-button id="print-btn" :isPrimary="isPrimary" v-on:click="btnClick">Print</ejs-button>
    <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height"
      :displayOption="displayOption">
    </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  rows: [{ name: 'Country' }, { name: 'Products' }],
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Sold', caption: 'Units Sold' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
};
const height = 350;
const displayOption = { view: 'Chart' };
const isPrimary = true;

const btnClick = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  pivotGridObj.chart.print();
};

provide('pivotview', [FieldList]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>