<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='RangeArea' xName='x' high='high' low='low' :marker='marker' :emptyPointSettings='emptyPointSettings'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, RangeAreaSeries, Category } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 'Jan', high: 14, low: 4 },
  { x: 'Feb', high: 17, low: 7 },
  { x: 'Mar', high: 20, low: 10 },
  { x: 'Apr', high: null, low: 12 },
  { x: 'May', high: 20, low: 10 },
  { x: 'Jun', high: 17, low: 7 },
  { x: 'Jul', high: 15, low: 5 },
  { x: 'Aug', high: 17, low: 7 },
  { x: 'Sep', high: 20, low: undefined },
  { x: 'Oct', high: 22, low: 12 },
  { x: 'Nov', high: 20, low: 10 },
  { x: 'Dec', high: 17, low: 7 }
];
const primaryXAxis = {
  valueType: 'Category',
  title: 'Month',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 }
};
const primaryYAxis = {
  title: 'Temperature',
  labelFormat: '{value}˚C',
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 30,
  majorTickLines: { width: 0 }
};
const title = 'Monthly Temperature Range';
const emptyPointSettings = {
  mode: 'Zero',
  fill: 'red'
};
const marker = { 
  visible: true, 
  width: 7, 
  height: 7, 
  isFilled: true 
};

provide('chart', [RangeAreaSeries, Category]);

</script>
<style>
  #container {
    height: 350px;
  }
</style>