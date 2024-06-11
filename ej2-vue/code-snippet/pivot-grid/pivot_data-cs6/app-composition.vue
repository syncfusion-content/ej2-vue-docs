<template>
  <div id="app">
    <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowConditionalFormatting="allowConditionalFormatting"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, ConditionalFormatting } from "@syncfusion/ej2-vue-pivotview";
import { Pivot_Data } from './Pivot_Data.js';

const dataSourceSettings = {
  dataSource: Pivot_Data,
  expandAll: false,
  enableSorting: true,
  drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }],
  columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  values: [{ name: 'In_Stock', caption: 'In Stock' },
  { name: 'Sold', caption: 'Units Sold' }],
  filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
  conditionalFormatSettings: [
    {
      label: 'Germany',
      conditions: 'Between',
      value1: 500,
      value2: 50000,
      style: {
        backgroundColor: '#f48fb1',
        color: 'black',
        fontFamily: 'Tahoma',
        fontSize: '12px'
      }
    }
  ]
};
const allowConditionalFormatting = true;
const height = 350;

provide('pivotview', [ConditionalFormatting]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>