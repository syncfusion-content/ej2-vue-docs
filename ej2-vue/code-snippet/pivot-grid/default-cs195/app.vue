<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :displayOption="displayOption" :chartSettings="chartSettings"
      :height="height"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent, PivotChart } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

export default {
  name: "App",
  components: {
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      displayOption: { view: 'Chart' },
      chartSettings: {
        title: 'Sales Analysis', value: 'Amount', chartSeries: { type: 'Column' },
        enableMultipleAxis: true, showPointColorByMembers: true, multipleAxisMode: 'Stacked',
        primaryYAxis: { border: { width: '0' } }
      }
    }
  },
  provide: {
    pivotview: [PivotChart]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>