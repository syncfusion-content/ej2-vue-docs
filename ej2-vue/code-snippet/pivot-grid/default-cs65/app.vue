<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showFieldList="showFieldList"
      :showGroupingBar="showGroupingBar"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent, FieldList, GroupingBar } from "@syncfusion/ej2-vue-pivotview";
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
        allowLabelFilter: true,
        allowValueFilter: true,
        values: [{ name: 'Sold', caption: 'Units Sold' }],
        columns: [{ name: 'Year', caption: 'Production Year' }],
        rows: [{ name: 'Country' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: [],
        fieldMapping: [
          { name: 'Quarter', groupName: 'Product category' },
          { name: 'Products', groupName: 'Product category' },
          { name: 'Amount', groupName: 'Product category', caption: 'Sold Amount' },
        ]
      },
      height: 350,
      showFieldList: true,
      showGroupingBar: true
    }
  },
  provide: {
    pivotview: [FieldList, GroupingBar]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>