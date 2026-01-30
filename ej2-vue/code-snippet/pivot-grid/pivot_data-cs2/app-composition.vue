<template>
  <div id="app">
    <ejs-button id="formatting-btn" :isPrimary="isPrimary" v-on:click="btnClick">APPLY FORMAT</ejs-button>
    <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowConditionalFormatting="allowConditionalFormatting"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, ConditionalFormatting } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
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
      measure: 'In_Stock',
      value1: 5000,
      conditions: 'LessThan',
      style: {
        backgroundColor: '#80cbc4',
        color: 'black',
        fontFamily: 'Tahoma',
        fontSize: '12px'
      }
    },
    {
      value1: 3400,
      value2: 40000,
      measure: 'Sold',
      conditions: 'Between',
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
const height = 320;
const isPrimary = true;

const btnClick = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  pivotGridObj.conditionalFormattingModule.showConditionalFormattingDialog();
};

provide('pivotview', [ConditionalFormatting]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>