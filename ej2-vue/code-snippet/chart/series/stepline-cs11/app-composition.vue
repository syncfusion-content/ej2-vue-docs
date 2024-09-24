<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :pointRender='pointRender'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='StepLine' xName='x' yName='y'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, StepLineSeries } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 2005, y: 370 },
  { x: 2006, y: 378 },
  { x: 2007, y: 416 },
  { x: 2008, y: 404 },
  { x: 2009, y: 390 },
  { x: 2010, y: 376 },
  { x: 2011, y: 365 },
  { x: 2012, y: 350 }
];
const primaryXAxis = {
  minimum: 2004, 
  maximum: 2013, 
  interval: 1,
  title: 'Year'
};
const primaryYAxis = {
  minimum: 330, 
  maximum: 450, 
  interval: 30,
  title: 'Intensity (g/kWh)'
};
const title = 'CO2 - Intensity Analysis';

provide('chart', [StepLineSeries]);

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