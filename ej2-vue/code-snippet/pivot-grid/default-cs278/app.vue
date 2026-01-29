<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">Excel Export</ejs-button>
  <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
  :allowExcelExport="allowExcelExport" :dataBound="ondataBound"
      :aggregateCellInfo="aggregateCell" :showFieldList="showFieldList"> </ejs-pivotview>
  </div >
</template >
<script>
import { PivotViewComponent, ExcelExport, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { L10n } from '@syncfusion/ej2-base';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

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

export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', type: 'CustomAggregateType1' }, { name: 'Amount', type: 'CustomAggregateType2' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
      },
      height: 320,
      allowExcelExport: true,
      isPrimary: true,
      showFieldList: true
    }
  },
  methods: {
    btnClick: function () {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.excelExport();
    },
    ondataBound: function () {
      let pivotObj = document.getElementById('pivotview').ej2_instances[0];
      pivotObj.getAllSummaryType = function () {
        return SummaryType;
      };
      pivotObj.pivotFieldListModule.aggregateTypes = SummaryType;
      pivotObj.pivotFieldListModule.getAllSummaryType = function () {
        return SummaryType;
      };
    },
    aggregateCell: function (args) {
      if (args.aggregateType === 'CustomAggregateType1') {
        args.value = args.value * 100;
      }
      if (args.aggregateType === 'CustomAggregateType2') {
        args.value = args.value / 100;
      }
    }
  },
  provide: {
    pivotview: [
      ExcelExport,
      FieldList
    ]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>