<template>
  <div id="app">
    <ejs-button id="flist-btn" :isPrimary="isPrimary" v-on:click="btnClick">Show Field List</ejs-button>
    <ejs-pivotview id="pivotview_flist" :height="height" :enginePopulated="enginePopulated"></ejs-pivotview>
    <ejs-pivotfieldlist id="pivotfieldlist1" :dataSourceSettings="dataSourceSettings"
      :enginePopulated="fieldEnginePopulated" :renderMode="renderMode" :target="target"></ejs-pivotfieldlist>
  </div>
</template>
<script setup>
import { PivotViewComponent as EjsPivotview, PivotFieldListComponent as EjsPivotfieldlist } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  drilledMembers: [{ name: 'Country', items: ['France'] }],
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: []
};
const renderMode = 'Popup';
const height = 320;
const target = '#pivotfieldlist1';
const isPrimary = true;

const btnClick = () => {
  let fieldListObj = document.getElementById('pivotfieldlist1').ej2_instances[0];
  fieldListObj.dialogRenderer.fieldListDialog.show();
};
const fieldEnginePopulated = () => {
  let fieldListObj = document.getElementById('pivotfieldlist1').ej2_instances[0];
  let pivotGridObj = document.getElementById('pivotview_flist').ej2_instances[0];
  fieldListObj.updateView(pivotGridObj);
};
const enginePopulated = () => {
  let fieldListObj = document.getElementById('pivotfieldlist1').ej2_instances[0];
  let pivotGridObj = document.getElementById('pivotview_flist').ej2_instances[0];
  if (fieldListObj) {
    fieldListObj.updateView(pivotGridObj);
  }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";

.e-toggle-field-list {
  display: none !important;
}
</style>