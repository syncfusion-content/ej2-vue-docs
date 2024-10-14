<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Bar' xName='x' yName='y' :emptyPointSettings='emptyPointSettings'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, BarSeries } from "@syncfusion/ej2-vue-charts";


const seriesData = [
  { x: 2006, y: 7.8 }, 
  { x: 2007, y: 7.2 },
  { x: 2008, y: null }, 
  { x: 2009, y: 10.7 },
  { x: 2010, y: 10.8}, 
  { x: 2011, y: 9.8 }
];
const primaryXAxis = {
  minimum: 2005, 
  maximum: 2012, 
  interval: 1,
  title: 'Year'
};
const primaryYAxis = {
  minimum: 3, 
  maximum: 12,
  interval: 1, 
  title: 'Percentage',
  labelFormat: '{value}%'
};
const title = 'Unemployment rate (%)';
const emptyPointSettings = {
  mode: 'Average'
};

provide('chart', [BarSeries]);

</script>
<style>
  #container {
    height: 350px;
  }
</style>