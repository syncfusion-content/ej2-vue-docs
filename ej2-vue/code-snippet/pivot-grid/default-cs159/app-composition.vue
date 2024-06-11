<template>
  <div id="app">
    <ejs-button id="calculated-field-btn" :isPrimary="isPrimary" v-on:click="btnClick">Number Formatting</ejs-button>
    <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings" :showFieldList="showFieldList"
      :allowNumberFormatting="allowNumberFormatting" :numberFormatting="numberFormatting"> </ejs-pivotview>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, NumberFormatting, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  enableSorting: true,
  formatSettings: [{ name: 'Amount', format: 'C2', useGrouping: false, currency: 'EUR' }],
  drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }],
  columns: [{ name: 'Year' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  values: [{ name: 'Amount', caption: 'Sold Amount' },
  { name: 'Sold', caption: 'Units Sold' }],
  filters: []
};
const height = 350;
const showFieldList = true;
const allowNumberFormatting = true;
const isPrimary = true;

const btnClick = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  pivotGridObj.numberFormattingModule.showNumberFormattingDialog();
};
const numberFormatting = (args) => {
  if (args.formatName === 'Amount') {
    args.cancel = true;
  }
};
provide('pivotview', [NumberFormatting, FieldList]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>