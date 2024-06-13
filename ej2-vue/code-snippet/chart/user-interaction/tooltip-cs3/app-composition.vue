<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :tooltip='tooltip'>
      <e-series-collection>
        <e-series :dataSource='seriesData1' type='Spline' xName='x' yName='y' name='Max Temp' :marker='marker'
          tooltipFormat='${point.x}'> </e-series>
        <e-series :dataSource='seriesData2' type='Spline' xName='x' yName='y' name='Avg Temp' :marker='marker'
          tooltipFormat='${point.y}'> </e-series>
        <e-series :dataSource='seriesData3' type='Spline' xName='x' yName='y' name='Min Temp' :marker='marker'>
        </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, SplineSeries, Category, Tooltip } from "@syncfusion/ej2-vue-charts";




const seriesData1 = [
  { x: 'Sun', y: 15 }, { x: 'Mon', y: 22 },
  { x: 'Tue', y: 32 },
  { x: 'Wed', y: 31 },
  { x: 'Thu', y: 29 }, { x: 'Fri', y: 24 },
  { x: 'Sat', y: 18 },
];
const seriesData2 = [
  { x: 'Sun', y: 10 }, { x: 'Mon', y: 18 },
  { x: 'Tue', y: 28 },
  { x: 'Wed', y: 28 },
  { x: 'Thu', y: 26 }, { x: 'Fri', y: 20 },
  { x: 'Sat', y: 15 }
];
const seriesData3 = [
  { x: 'Sun', y: 2 }, { x: 'Mon', y: 12 },
  { x: 'Tue', y: 22 },
  { x: 'Wed', y: 23 },
  { x: 'Thu', y: 19 }, { x: 'Fri', y: 13 },
  { x: 'Sat', y: 8 },
];
const primaryXAxis = {
  valueType: 'Category'
};
const marker = {
  visible: true, width: 10, height: 10
};
const tooltip = { enable: true, header: 'Unemployment', format: '<b>${point.x} : ${point.y}</b>' };
const title = "NC Weather Report - 2016";

provide('chart', [SplineSeries, Category, Tooltip]);

</script>
<style>
#container {
  height: 350px;
}
</style>