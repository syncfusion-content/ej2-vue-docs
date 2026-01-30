<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :enginePopulating="enginePopulating">
    </ejs-pivotview>
  </div>
</template>
<script setup>
import { PivotViewComponent as EjsPivotview } from "@syncfusion/ej2-vue-pivotview";
import { noData } from './noData.js';

const dataSourceSettings = {
  dataSource: noData,
  expandAll: true,
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  columns: [{ name: 'Date' }],
  values: [{ name: 'Quantity', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }, { name: 'State' }],
  filters: [],
  emptyCellsTextContent: '**'
};
const height = 350;

const enginePopulating = (args) => {
  args.dataSourceSettings.columns[0].caption = 'Full Year';
  args.dataSourceSettings.emptyCellsTextContent = '##';
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>