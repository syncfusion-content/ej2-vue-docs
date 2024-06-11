<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showFieldList="showFieldList"
      :showGroupingBar="showGroupingBar" :aggregateTypes="aggregateTypes"> </ejs-pivotview>
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
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount', type: 'Sum' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: [],
      },
      height: 350,
      showFieldList: true,
      showGroupingBar: true,
      aggregateTypes: ['DistinctCount', 'Avg', 'Product']
    }
  },
  provide: {
    pivotview: [GroupingBar, FieldList]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>