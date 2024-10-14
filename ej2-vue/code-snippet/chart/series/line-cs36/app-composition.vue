<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :seriesRender='seriesRender' isTransposed='true'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Spline' xName='x' yName='y' width=2 :marker='marker'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, SplineSeries, Category } from "@syncfusion/ej2-vue-charts";

const seriesData = [
    { x: 'Jan', y: -1 }, { x: 'Feb', y: -1 },
    { x: 'Mar', y: 2 },  { x: 'Apr', y: 8 },
    { x: 'May', y: 13 }, { x: 'Jun', y: 18 },
    { x: 'Jul', y: 21 }, { x: 'Aug', y: 20 },
    { x: 'Sep', y: 16 }, { x: 'Oct', y: 10 },
    { x: 'Nov', y: 4 },  { x: 'Dec', y: 0 }
];
const primaryXAxis = {
  title: 'Month',
  valueType: 'Category'
};
const primaryYAxis = {
  minimum: -5, maximum: 25, interval: 10,
  labelFormat: '{value}˚C',
  majorGridLines: { width : 0 }
};
const title = "Climate Graph-2012";
const marker = {
  visible: true
};

provide('chart', [SplineSeries, Category]);
const seriesRender = function (args) {
  args.fill = '#ff6347';
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>