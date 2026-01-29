<template>
  <div id="app">
    <ejs-button id="enablertl" :isPrimary="isPrimary" cssClass='e-flat' v-on:click="enableRtl">ENABLE RTL</ejs-button>
    <ejs-button id="disablertl" :isPrimary="isPrimary" cssClass='e-flat' v-on:click="disableRtl">DISABLE RTL</ejs-button>
    <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings"
      :height="height" :showToolbar="showToolbar" :toolbar="toolbar"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { PivotViewComponent as EjsPivotview, Toolbar } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: []
};
const height = 350;
const gridSettings = { columnWidth: 140 };
const showToolbar = true;
const toolbar = [{ template: '#enablertl' }, { template: '#disablertl' }];
const isPrimary = true;

const enableRtl = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  pivotGridObj.enableRtl = true;
};
const disableRtl = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  pivotGridObj.enableRtl = false;
};

provide('pivotview', [
  Toolbar,
]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>