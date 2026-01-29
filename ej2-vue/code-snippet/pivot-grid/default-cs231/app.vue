<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showGroupingBar="showGroupingBar"
      :showFieldList="showFieldList" :actionBegin="actionBegin"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent, GroupingBar, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

export default {
  name: "App",
  components: {
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      showGroupingBar: true,
      showFieldList: true
    }
  },
  methods: {
    actionBegin: function (args) {
      if (args.actionName == 'Sort field' || args.actionName == 'Sort value') {
        args.cancel = true;
      }
    }
  },
  provide: {
    pivotview: [GroupingBar, FieldList]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>