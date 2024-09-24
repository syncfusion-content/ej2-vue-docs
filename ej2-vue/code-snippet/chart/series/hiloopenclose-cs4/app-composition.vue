<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='HiloOpenClose' xName='x' high='high' low='low' open='open' close='close' :emptyPointSettings='emptyPointSettings'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, HiloOpenCloseSeries, Category } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 'Jan', open: 120, high: 160, low: 100, close: 140 },
  { x: 'Feb', open: 150, high: 190, low: 130, close: 170 },
  { x: 'Mar', open: 130, high: null, low: 110, close: 150 },
  { x: 'Apr', open: 160, high: 180, low: 120, close: 140 },
  { x: 'May', open: 150, high: 170, low: 110, close: 130 }
];
const primaryXAxis = {
  title: 'Month',
  valueType: 'Category'
};
const primaryYAxis = {
  title: 'Price in Dollar', 
  minimum: 60, 
  maximum: 200, 
  interval: 20,
  labelFormat: '${value}'
};
const title = "Financial Analysis";

provide('chart', [HiloOpenCloseSeries, Category]);
const emptyPointSettings = {
  mode: 'Average'
};

</script>
<style>
  #container {
    height: 350px;
  }
</style>