<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' name='Product X' opacity=0.6> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, LineSeries } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 1900, y: 4, y1: 2.6, y2: 2.8 }, { x: 1920, y: 3.0, y1: 2.8, y2: 2.5 },
  { x: 1940, y: 3.8, y1: 2.6, y2: 2.8 }, { x: 1960, y: 3.4, y1: 3, y2: 3.2 },
  { x: 1980, y: 3.2, y1: 3.6, y2: 2.9 }, { x: 2000, y: 3.9, y1: 3, y2: 2 }
];
const primaryXAxis = {
  title: 'Year',
  edgeLabelPlacement: 'Shift'
};
const primaryYAxis = {
  title: 'Sales Amount in Millions',
  labelFormat: '${value}k'
};
const title = "Average Sales Comparison";

provide('chart', [LineSeries]);

</script>
<style>
#container {
  height: 350px;
}
</style>