<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='SplineRangeArea' xName='x' high='high' low='low' name='England' :emptyPointSettings='emptyPointSettings' :marker='marker'>
        </e-series>
        <e-series :dataSource='seriesData' type='SplineRangeArea' xName='x' high='high1' low='low1' name='India' :emptyPointSettings='emptyPointSettings1' :marker='marker1'>
        </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, SplineRangeAreaSeries, Category, Legend } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 'Jan', high: 14, low: 4,  high1: 29, low1: 19 },
  { x: 'Feb', high: 17, low: 7,  high1: 32, low1: 22 },
  { x: 'Mar', high: 20, low: 10, high1: 35, low1: 25 },
  { x: 'Apr', high: null, low: 12, high1: 37, low1: 27 },
  { x: 'May', high: 20, low: 10, high1: 35, low1: 25 },
  { x: 'Jun', high: 17, low: 7,  high1: 32, low1: 22 },
  { x: 'Jul', high: 15, low: 5,  high1: 30, low1: 20 },
  { x: 'Aug', high: 17, low: 7,  high1: 32, low1: 22 },
  { x: 'Sep', high: 20, low: 10, high1: undefined, low1: 25 },
  { x: 'Oct', high: 22, low: 12, high1: 37, low1: 27 },
  { x: 'Nov', high: 20, low: 10, high1: 35, low1: 25 },
  { x: 'Dec', high: 17, low: 7,  high1: 32, low1: 22 }
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
  maximum: 40,
  majorTickLines: { width: 0 }
};
const title = 'Monthly Temperature Range';
const emptyPointSettings = {
  mode: 'Zero',
  fill: 'red',
  border: { 
    width: 2, 
    color: 'green' 
  }
};
const emptyPointSettings1 = {
  mode: 'Gap'
};
const marker = { 
  visible: true, 
  width: 7, 
  height: 7, 
  isFilled: true 
};
const marker1 = { 
  visible: true, 
  width: 4, 
  height: 4, 
  isFilled: true 
}

provide('chart', [SplineRangeAreaSeries, Category, Legend]);

</script>
<style>
  #container {
    height: 350px;
  }
</style>