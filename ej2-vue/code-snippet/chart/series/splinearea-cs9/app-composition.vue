<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :pointRender='pointRender'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='SplineArea' xName='x' yName='y' :marker='marker'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, SplineAreaSeries, Category } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 'Jan', y: -1 }, 
  { x: 'Feb', y: -1 }, 
  { x: 'Mar', y: 2 },
  { x: 'Apr', y: 8 }, 
  { x: 'May', y: 13 }, 
  { x: 'Jun', y: 18 }, 
  { x: 'Jul', y: 21 }, 
  { x: 'Aug', y: 20 }, 
  { x: 'Sep', y: 16 }, 
  { x: 'Oct', y: 10 }, 
  { x: 'Nov', y: 4 }, 
  { x: 'Dec', y: 0 }
];
const primaryXAxis = {
  valueType: 'Category',
  title: 'Month'
};
const primaryYAxis = {
  minimum: -5,
  maximum: 30, 
  interval: 5,
  title: 'Temperature in Celsius',
  labelFormat: '{value}°C'
};
const title = 'Climate Graph-2012';
const marker = { 
  visible: true, 
  isFilled: true, 
  width: 7, 
  height: 7 
};

provide('chart', [SplineAreaSeries, Category]);

const pointRender = function (args) {
  if (args.point.y < 10) {
      args.fill = '#ff6347';
  }
  else {
      args.fill = '#009cb8';
  }
};

</script>
<style>
  #container {
    height: 350px;
  }
</style>