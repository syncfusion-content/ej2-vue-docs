<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showGroupingBar="showGroupingBar"
      :allowGrouping="allowGrouping"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent, GroupingBar, Grouping } from "@syncfusion/ej2-vue-pivotview";
import { gData } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: gData,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Product_ID', caption: 'Product ID' }],
        rows: [
            { name: 'Date_Year', caption: 'Year' },
            { name: 'Date_Month', caption: 'Month' },
        ],
        values: [
            { name: 'Sold', caption: 'Unit Sold' },
            { name: 'Amount', caption: 'Sold Amount' },
        ],
        formatSettings: [
            { name: 'Amount', format: 'C' },
            { name: 'Date_Year', type: 'date_year', format: 'yyyy' },
            { name: 'Date_Month', type: 'date_month', format: 'MMM' },
        ],
        filters: [],
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
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>