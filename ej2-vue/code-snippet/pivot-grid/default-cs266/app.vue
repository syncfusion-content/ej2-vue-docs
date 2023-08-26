



<template>
  <div id="app">
    <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height" :dataBound="ondataBound"
        :aggregateCellInfo="aggregateCell" :showFieldList="showFieldList" > </ejs-pivotview>
</div>
</template >

<script>
import Vue from "vue";
import { PivotViewPlugin, FieldList} from "@syncfusion/ej2-vue-pivotview";
import { L10n } from '@syncfusion/ej2-base';
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);

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
  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        rows: [{ name: 'Country' }, { name: 'Products' }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Sold', caption: 'Units Sold' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
      },
      height: 350,
      showFieldList: true
    }
  },
  methods: {
    ondataBound: function() {
      let pivotObj = document.getElementById('pivotview').ej2_instances[0];
      pivotObj.getAllSummaryType = function () {
          return SummaryType;
      };
      pivotObj.pivotFieldListModule.aggregateTypes = SummaryType;
      pivotObj.pivotFieldListModule.getAllSummaryType = function () {
          return SummaryType;
      };
    },
    aggregateCell:function(args) {
      if (args.aggregateType === 'CustomAggregateType1') {
          args.value = args.value * 100;
      }
      if (args.aggregateType === 'CustomAggregateType2') {
          args.value = args.value / 100;
      }
    }
  },
  provide: {
        pivotview: [FieldList]
    }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>




