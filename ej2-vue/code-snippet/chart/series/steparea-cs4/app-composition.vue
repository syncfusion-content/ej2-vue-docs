<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='StepArea' xName='x' yName='y' dashArray='5,5' :border='border'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, StepAreaSeries, Tooltip } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 1, y: 7 },   { x: 2, y: 1 }, 
  { x: 3, y: 1 },   { x: 4, y: 14 }, 
  { x: 5, y: 1 },   { x: 6, y: 10 },
  { x: 7, y: 8 },   { x: 8, y: 6 }, 
  { x: 9, y: 10 },  { x: 10, y: 10 }, 
  { x: 11, y: 16 }, { x: 12, y: 6 },
  { x: 13, y: 14 }, { x: 14, y: 7 }, 
  { x: 15, y: 5 },  { x: 16, y: 2 }, 
  { x: 17, y: 14 }, { x: 18, y: 7 },
  { x: 19, y: 7 },  { x: 20, y: 10 }
];
const primaryXAxis = {
  title: 'Overs'
};
const primaryYAxis = {
  title: 'Runs'
};
const title = 'England - Run Rate';
const tooltip = {
  enable: true
};
const border: { 
  width: 2, 
  color: '#FFA500',
  dashArray: "5,5"
};

provide('chart', [StepAreaSeries, Tooltip]);

</script>
<style>
  #container {
    height: 350px;
  }
</style>