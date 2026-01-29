<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showGroupingBar="showGroupingBar">
    </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent, GroupingBar } from "@syncfusion/ej2-vue-pivotview";
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
        expandAll: true,
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
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>