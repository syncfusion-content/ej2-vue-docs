<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' name='Sales'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, LineSeries, DateTimeCategory } from "@syncfusion/ej2-vue-charts";

const seriesData = [{ x: new Date(2017, 11, 20), y: 21 }, { x: new Date(2017, 11, 21), y: 24 },
{ x: new Date(2017, 11, 22), y: 24 }, { x: new Date(2017, 11, 26), y: 70 },
{ x: new Date(2017, 11, 27), y: 75 }, { x: new Date(2018, 0, 2), y: 82 },
{ x: new Date(2018, 0, 3), y: 53 }, { x: new Date(2018, 0, 4), y: 54 },
{ x: new Date(2018, 0, 5), y: 53 }, { x: new Date(2018, 0, 8), y: 45 }
];
const primaryXAxis = {
  valueType: 'DateTimeCategory'
};
const primaryYAxis = {
  title: 'Sales Amount in millions(USD)'
};
const title = "Average Sales Comparison";

provide('chart', [LineSeries, DateTimeCategory]);

</script>
<style>
#container {
  height: 350px;
}
</style>