


<template>
    <div id="app">
        <ejs-pivotview :height="height" :dataSourceSettings="dataSourceSettings" :actionComplete="actionComplete"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin, PivotActionCompleteEventArgs } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);

export default {
  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350
    }
  },
   methods: {
    actionComplete: function (args: PivotActionCompleteEventArgs) {
      if (args.actionName == 'Drill down' || args.actionName == 'Drill up') {
            // Triggers when the drill operations are completed.
      }
    }
  }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>



