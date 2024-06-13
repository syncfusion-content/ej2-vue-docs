<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
      useGroupingSeparator='true'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Product X' opacity=0.6> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 10, y: 7000 }, { x: 20, y: 1000 }, { x: 30, y: 12000 }, { x: 40, y: 14000 }, { x: 50, y: 11000 }, { x: 60, y: 5000 },
  { x: 70, y: 7300 }, { x: 80, y: 9000 }, { x: 90, y: 12000 }, { x: 100, y: 14000 }, { x: 110, y: 11000 }, { x: 120, y: 5000 },
];
const primaryXAxis = {
  title: 'Rate',
  edgeLabelPlacement: 'Shift'
};
const primaryYAxis = {
  title: 'Sales Amount in Millions'
};
const title = "Average Sales Comparison";

provide('chart', [ColumnSeries]);

</script>
<style>
#container {
  height: 350px;
}
</style>