<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :editSettings="editSettings"
      :beginDrillThrough="beginDrillThrough"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { PivotViewComponent as EjsPivotview } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';
import { Grid, Sort, Filter, Group, Inject } from '@syncfusion/ej2-grids';

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
const height = 350;
const editSettings = { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Normal' };

const beginDrillThrough = (args) => {
  if (args.gridObj) {
    Grid.Inject(Sort, Filter, Group);
    let gridObj = args.gridObj;
    gridObj.allowGrouping = true;
    gridObj.allowSorting = true;
    gridObj.allowFiltering = true;
    gridObj.filterSettings = { type: 'CheckBox' };
  }
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>