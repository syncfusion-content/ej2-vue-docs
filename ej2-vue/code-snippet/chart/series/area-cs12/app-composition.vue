<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='RangeStepArea' xName='x' high='high' low='low' name='England'
          :border="border" fill="red" opacity=0.4 width=2 dashArray="5.5" step="Center"></e-series>
        <e-series :dataSource='seriesData1' type='RangeStepArea' xName='x' high='high' low='low' name='India'
          :border="border" fill="blue" opacity=0.4 width=2 dashArray="5.5" step="Center"></e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, RangeStepAreaSeries, Category } from "@syncfusion/ej2-vue-charts";


const seriesData = [
  { x: 'Jan', high: 14, low: 4 },
  { x: 'Feb', high: 17, low: 7 },
  { x: 'Mar', high: 20, low: 10 },
  { x: 'Apr', high: 22, low: 12 },
  { x: 'May', high: 20, low: 10 },
  { x: 'Jun', high: 17, low: 7 },
  { x: 'Jul', high: 15, low: 5 },
  { x: 'Aug', high: 17, low: 7 },
  { x: 'Sep', high: 20, low: 10 },
  { x: 'Oct', high: 22, low: 12 },
  { x: 'Nov', high: 20, low: 10 },
  { x: 'Dec', high: 17, low: 7 }
];
const seriesData1 = [
  { x: 'Jan', high: 29, low: 19 },
  { x: 'Feb', high: 32, low: 22 },
  { x: 'Mar', high: 35, low: 25 },
  { x: 'Apr', high: 37, low: 27 },
  { x: 'May', high: 35, low: 25 },
  { x: 'Jun', high: 32, low: 22 },
  { x: 'Jul', high: 30, low: 20 },
  { x: 'Aug', high: 32, low: 22 },
  { x: 'Sep', high: 35, low: 25 },
  { x: 'Oct', high: 37, low: 27 },
  { x: 'Nov', high: 35, low: 25 },
  { x: 'Dec', high: 32, low: 22 }
];
const primaryXAxis = {
  valueType: 'Category',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 }
};
const primaryYAxis = {
  labelFormat: '{value}˚C',
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 40,
  majorTickLines: { width: 0 }
};
const title = 'Monthly Temperature Range';
const border = {
  width: 2,
  color: 'Yellow'
};

provide('chart', [RangeStepAreaSeries, Category]);

</script>
<style>
#container {
  height: 350px;
}
</style>