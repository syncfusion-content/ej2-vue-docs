<template>
  <div id="app">
    <ejs-button id="save-btn" :isPrimary="isPrimary" v-on:click="saveBtnClick">Save Layout</ejs-button>
    <ejs-button id="load-btn" :isPrimary="isPrimary" v-on:click="loadBtnClick">Load Layout</ejs-button>
    <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height"
      :showGroupingBar="showGroupingBar" :enablePersistence="enablePersistence"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, GroupingBar } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

let layout;
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
const showGroupingBar = true;
const enablePersistence = true;
const isPrimary = true;

provide('pivotview', [GroupingBar]);

const saveBtnClick = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  layout = pivotGridObj.getPersistData();
};
const loadBtnClick = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  pivotGridObj.loadPersistData(layout);
};


</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>