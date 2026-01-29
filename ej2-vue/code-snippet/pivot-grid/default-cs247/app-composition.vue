<template>
  <div id="app">
    <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings"
      :height="height" :showToolbar="showToolbar" :toolbar="toolbar" :toolbarRender="beforeToolbarRender"
      :displayOption="displayOption"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, Toolbar, } from "@syncfusion/ej2-vue-pivotview";
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
const displayOption = { view: 'Both' };
const showToolbar = true;
const toolbar = [
  "Expand/Collpase",
];

const beforeToolbarRender = (args) => {
  args.customToolbar.splice(12, 0, {
    prefixIcon: 'e-pivotview-expand e-icons', tooltipText: 'Expand/Collapse',
    click: toolbarClicked.bind(),
  });
};
const toolbarClicked = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  pivotGridObj.dataSourceSettings.expandAll = !pivotGridObj.dataSourceSettings.expandAll;
};

provide('pivotview', [
  Toolbar,
]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";</style>