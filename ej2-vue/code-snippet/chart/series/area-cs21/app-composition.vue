<template>
  <div id="app">
    <ejs-chart :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :pointRender='pointRender'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Area' xName='x' yName='y' :marker='marker'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, AreaSeries } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 1900, y: 4 }, 
  { x: 1920, y: 3.0 },
  { x: 1940, y: 3.8 },
  { x: 1960, y: 3.4 }, 
  { x: 1980, y: 3.2 }, 
  { x: 2000, y: 3.9 }
];
const primaryXAxis = {
  title: 'Year',
  minimum: 1900, 
  maximum: 2000, 
  interval: 10,
  edgeLabelPlacement: 'Shift'
};
const primaryYAxis = {
  minimum: 2, 
  maximum: 5, 
  interval: 0.5,
  title: 'Sales Amount in Millions'
};
const title = 'Average Sales Comparison';
const marker = { visible: true };

provide('chart', [AreaSeries]);

const pointRender = function (args) {
  if (args.point.index % 2 !== 0) {
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