



<template>
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showGroupingBar="showGroupingBar" :onHeadersSort="onHeadersSort"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin, GroupingBar, HeadersSortEventArgs } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);

export default {
  data () {
    return {
      dataSourceSettings: {
      dataSource: pivotData,
      expandAll: false,
      enableSorting: true,
      columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
      values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
      rows: [{ name: 'Country' }, { name: 'Products' }],
      filters: []
      },
      height: 350,
      showGroupingBar: true
    }
  },
  provide: {
        pivotview: [GroupingBar]
    }
  methods: {
    onHeadersSort: function (args: HeadersSortEventArgs) {
      if (args.fieldName == 'Country') {
            args.members = ['United Kingdom', 'Germany'];
            args.IsOrderChanged = true;
        }
        if (args.fieldName == 'Year') {
            args.members = ['FY 2017', 'FY 2015'];
            args.IsOrderChanged = true;
        }
    },
  }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>




