<template>
  <div id="app">
    <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings" :showFieldList="showFieldList"
      :allowCalculatedField="allowCalculatedField" :calculatedFieldCreate="calculatedFieldCreate"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, CalculatedField, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }, { name: 'Total', caption: 'Total Amount', type: 'CalculatedField' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: [],
  calculatedFieldSettings: [{ name: 'Total', formula: 'Math.round("Sum(Amount)") > abs("Sum(Sold)") ? min("Sum(Amount)", "Sum(Sold)") : Math.sqrt("Sum(Sold)")' }]
};
const height = 350;
const allowCalculatedField = true;
const showFieldList = true;

const calculatedFieldCreate = (args) => {
  if (args.calculatedField.formatString === '') {
    args.cancel = true;
  }
};

provide('pivotview', [CalculatedField, FieldList]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>