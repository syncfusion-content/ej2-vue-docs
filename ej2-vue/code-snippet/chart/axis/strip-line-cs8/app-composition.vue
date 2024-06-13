<template>
  <div id="app">
    <ejs-chart id="container" :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' name='Run Rates'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, Category, ColumnSeries, LineSeries, DataLabel, StripLine } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 1, y: 5 }, { x: 2, y: 39 }, { x: 3, y: 21 }, { x: 4, y: 51 }, { x: 5, y: 30 },
  { x: 6, y: 25 }, { x: 7, y: 10 }, { x: 8, y: 40 }, { x: 9, y: 50 }, { x: 10, y: 20 }
];
const primaryYAxis = {
  stripLines: [
    {
      start: 20, end: 40, isSegmented: true, segmentStart: 2, segmentEnd: 4,
      color: 'rgba(167,169,171, 0.3)'
    }

  ],
};

provide('chart', [ColumnSeries, Category, LineSeries, DataLabel, StripLine]);
</script>
<style>
#container {
  height: 350px;
}
</style>