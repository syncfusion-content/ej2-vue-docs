<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showFieldList="showFieldList">
    </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotNullData } from './pivotNullData.js';

const dataSourceSettings = {
  dataSource: pivotNullData,
  expandAll: false,
  rows: [{ name: 'Country' }, { name: 'State' }],
  columns: [{ name: 'Product', showNoDataItems: true }, { name: 'Date' }],
  values: [{ name: 'Amount' }, { name: 'Quantity' }],
  showHeaderWhenEmpty: false
};
const height = 350;
const showFieldList = true;

provide('pivotview', [FieldList]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>