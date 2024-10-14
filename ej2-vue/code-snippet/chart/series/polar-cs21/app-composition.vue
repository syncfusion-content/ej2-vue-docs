<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Polar' xName='x' yName='y' drawType='Line' width=2 :marker='marker' :emptyPointSettings='emptyPointSettings'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, PolarSeries, LineSeries } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 2005, y: 28 }, 
  { x: 2006, y: 25 }, 
  { x: 2007, y: 26 }, 
  { x: 2008, y: null },
  { x: 2009, y: 32 }, 
  { x: 2010, y: 35 }, 
  { x: 2011, y: 30 }
];
const primaryXAxis = {
  title: 'Year',
  minimum: 2005, 
  maximum: 2011, 
  interval: 1
};
const primaryYAxis = {
  minimum: 0, 
  maximum: 40, 
  interval: 10,
  title: 'Efficiency',
  labelFormat: '{value}%'
};
const title = "Efficiency of oil-fired power production";
const emptyPointSettings = {
  mode: 'Zero',
  fill: 'red',
  border: { width: 2, color: 'blue' }
};
const marker = { 
  visible: true, 
  width: 7, 
  height: 7, 
  isFilled: true 
};

provide('chart', [PolarSeries, LineSeries]);

</script>
<style>
  #container {
    height: 350px;
  }
</style>