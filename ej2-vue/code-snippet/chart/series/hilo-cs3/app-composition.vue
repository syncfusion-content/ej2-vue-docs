<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Hilo' xName='x' high='high' low='low' fill='url(#gradient)'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, HiloSeries, Category } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 'Jan', low: 87, high: 200 },  { x: 'Feb', low: 45, high: 135 },
  { x: 'Mar', low: 19, high: 85 },   { x: 'Apr', low: 31, high: 108 },
  { x: 'May', low: 27, high: 80 },   { x: 'Jun', low: 84, high: 130 },
  { x: 'Jul', low: 77, high: 150 },  { x: 'Aug', low: 54, high: 125 },
  { x: 'Sep', low: 60, high: 155 },  { x: 'Oct', low: 60, high: 180 },
  { x: 'Nov', low: 88, high: 180 },  { x: 'Dec', low: 84, high: 230 }
];
const primaryXAxis = {
  valueType: 'Category',
  title: 'Months'
};
const primaryYAxis = {
  labelFormat: '{value}mm',
  edgeLabelPlacement: 'Shift',
  title: 'Rainfall'
};
const title = "Maximum and Minimum Rainfall";

provide('chart', [HiloSeries, Category]);

</script>
<style>
  #container {
    height: 350px;
  }
</style>