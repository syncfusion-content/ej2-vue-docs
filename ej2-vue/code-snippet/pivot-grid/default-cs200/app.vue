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
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      displayOption: { view: 'Chart' },
      chartSettings: {
        crosshair: { enable: true },
        chartSeries: {
          type: 'Line',
          marker: { fill: '#EEE', height: 10, width: 10, shape: 'Pentagon', visible: true }
        },
        primaryXAxis: { crosshairTooltip: { enable: true, fill: '#ff0000' } },
        primaryYAxis: { crosshairTooltip: { enable: true, fill: '#0000FF' } }
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