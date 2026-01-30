<template>
  <div id="app">
    <ejs-pivotview id="pivotview_flist" :height="height" :gridSettings="gridSettings" :enginePopulated="enginePopulated"
      :width="width" :enableVirtualization="enableVirtualization"></ejs-pivotview>
    <ejs-pivotfieldlist id="pivotfieldlist1" :dataSourceSettings="dataSourceSettings"
      :enginePopulated="fieldEnginePopulated" :load="load" :dataBound="dataBound"
      :allowCalculatedField="allowCalculatedField" :renderMode="renderMode"></ejs-pivotfieldlist>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, PivotFieldListComponent as EjsPivotfieldlist, FieldList, CalculatedField, VirtualScroll } from "@syncfusion/ej2-vue-pivotview";
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
const renderMode = "Fixed";
const gridSettings = { columnWidth: 140 };
const allowCalculatedField = true;
const enableVirtualization = true;
const width = "99%";

const fieldEnginePopulated = () => {
  let fieldListObj = document.getElementById('pivotfieldlist1').ej2_instances[0];
  let pivotGridObj = document.getElementById('pivotview_flist').ej2_instances[0];
  fieldListObj.updateView(pivotGridObj);
};
const dataBound = () => {
  let pivotObj = document.getElementById('pivotview_flist').ej2_instances[0];
  pivotObj.tooltip.destroy();
  pivotObj.refresh();
};
const load = () => {
  let pivotObj = document.getElementById('pivotview_flist').ej2_instances[0];
  let fieldListObj = document.getElementById('pivotfieldlist1').ej2_instances[0];
  pivotObj.dataSourceSettings = fieldListObj.dataSourceSettings;
  pivotObj.updatePageSettings(true);
  fieldListObj.pageSettings = pivotObj.pageSettings;
};
const enginePopulated = () => {
  let pivotObj = document.getElementById('pivotview_flist').ej2_instances[0];
  let fieldListObj = document.getElementById('pivotfieldlist1').ej2_instances[0];
  if (fieldListObj && pivotObj) {
    fieldListObj.update(pivotObj);
  }
};

provide('pivotview', [CalculatedField, FieldList, VirtualScroll],);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";

#pivotfieldlist1 {
  width: 400px;
  margin-top: 20px;
}
</style>