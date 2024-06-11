<template>
  <div id="app">
    <ejs-pivotview :height="height" :dataSourceSettings="dataSourceSettings" :showGroupingBar="showGroupingBar">
    </ejs-pivotview>
  </div>
</template>

<script>
import { PivotViewComponent, GroupingBar } from "@syncfusion/ej2-vue-pivotview";
import { alphanumeric_data } from './alphanumeric_data.js';

export default {
  name: "App",
  components: {
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: alphanumeric_data,
        rows: [{ name: 'ProductID', dataType: 'number' }],
        columns: [{ name: 'Country' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      showGroupingBar: true
    }
  },
  provide: {
    pivotview: [GroupingBar]
  }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>