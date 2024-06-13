<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Run Rates'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries, StripLine } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 1, y: 20 }, { x: 2, y: 22 }, { x: 3, y: 0 }, { x: 4, y: 12 }, { x: 5, y: 5 },
  { x: 6, y: 15 }, { x: 7, y: 6 }, { x: 8, y: 12 }, { x: 9, y: 20 }, { x: 10, y: 7 }
];
const primaryYAxis =
{
  title: 'Runs'
};
const primaryXAxis = {
  stripLines: [
    { startFromOrigin: true, size: 4, zIndex: 'Behind', opacity: 0.5, border: { width: 2, color: 'red' } }
  ],
  title: 'Overs'
};
const title = "India Vs Australia 1st match";

provide('chart', [ColumnSeries, StripLine]);
</script>
<style>
#container {
  height: 350px;
}
</style>