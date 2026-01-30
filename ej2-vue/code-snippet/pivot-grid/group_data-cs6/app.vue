<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showGroupingBar="showGroupingBar"
      :allowGrouping="allowGrouping"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent, GroupingBar, Grouping } from "@syncfusion/ej2-vue-pivotview";
import { Group_Data } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: Group_Data,
        expandAll: false,
        enableSorting: true,
        formatSettings: [{ name: 'Amount', format: 'C' }, { name: 'Product_ID', format: 'N0' }],
        columns: [{ name: 'Product_ID', caption: 'Product ID' }],
        rows: [{ name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Unit Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
        filters: []
      },
      height: 350,
      showGroupingBar: true,
      allowGrouping: true
    }
  },
  provide: {
    pivotview: [GroupingBar, Grouping]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>