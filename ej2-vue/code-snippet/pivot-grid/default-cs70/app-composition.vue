<template>
  <div id="app">
    <ejs-pivotview id="pivotview_flist" :dataSourceSettings="dataSourceSettings" :height="height"
      :showFieldList="showFieldList" :enginePopulated="fieldEnginePopulated"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  drilledMembers: [{ name: 'Country', items: ['France'] }],
  columns: [{ name: 'Products' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: []
};
const height = 350;
const showFieldList = true;

provide('pivotview', [FieldList]);

const fieldEnginePopulated = () => {
  let pivotTableObj = document.getElementById('pivotview_flist').ej2_instances[0];
  Object.keys(pivotTableObj.engineModule.fieldList).forEach((key) => {
    if (key === 'Quarter') {
      pivotTableObj.engineModule.fieldList[key].caption = 'Production Quarter Year';
    }
    else if (key === 'Year') {
      pivotTableObj.engineModule.fieldList[key].caption = 'Production Year';
    }
  });
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>