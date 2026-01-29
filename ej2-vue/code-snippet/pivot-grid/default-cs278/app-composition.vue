<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">Excel Export</ejs-button>
  <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
  :allowExcelExport="allowExcelExport" :dataBound="ondataBound"
  :aggregateCellInfo="aggregateCell" :showFieldList="showFieldList"> </ejs-pivotview>
  </div >
</template >
<script setup>
import { PivotViewComponent as EjsPivotview, ExcelExport, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
  'en-US': {
    pivotview: {
      CustomAggregateType1: 'Custom Aggregate Type 1',
      CustomAggregateType2: 'Custom Aggregate Type 2',
    },
    pivotfieldlist: {
      CustomAggregateType1: 'Custom Aggregate Type 1',
      CustomAggregateType2: 'Custom Aggregate Type 2',
    }
  }
});
let SummaryType = [
  'Sum',
  'Count',
  'DistinctCount',
  'Avg',
  'CustomAggregateType1',
  'CustomAggregateType2'
];

const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  enableSorting: true,
  columns: [{ name: 'Year' }, { name: 'Quarter' }],
  values: [{ name: 'Sold', type: 'CustomAggregateType1' }, { name: 'Amount', type: 'CustomAggregateType2' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
};
const height = 320;
const allowExcelExport = true;
const isPrimary = true;
const showFieldList = true;

const ondataBound = () => {
  let pivotObj = document.getElementById('pivotview').ej2_instances[0];
  pivotObj.getAllSummaryType = function () {
    return SummaryType;
  };
  pivotObj.pivotFieldListModule.aggregateTypes = SummaryType;
  pivotObj.pivotFieldListModule.getAllSummaryType = function () {
    return SummaryType;
  };
};
const aggregateCell = (args) => {
  if (args.aggregateType === 'CustomAggregateType1') {
    args.value = args.value * 100;
  }
  if (args.aggregateType === 'CustomAggregateType2') {
    args.value = args.value / 100;
  }
};

const btnClick = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  pivotGridObj.excelExport();
};

provide('pivotview', [
  ExcelExport,
  FieldList
]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>