<template>
  <div id="app">
    <ejs-chart id="container" :title='title'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Area' xName='x' yName='y' name='Product A' fill='green' width=2
          :border='border' opacity=0.4> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, AreaSeries } from "@syncfusion/ej2-vue-charts";



const seriesData = [
  { x: 1900, y: 4 }, { x: 1920, y: 3.0 }, { x: 1940, y: 3.8 },
  { x: 1960, y: 3.4 }, { x: 1980, y: 3.2 }, { x: 2000, y: 3.9 }
];
const border = { width: 1.5 };
const title = "Average Sales Comparison";

provide('chart', [AreaSeries]);

</script>
<style>
#container {
  height: 350px;
}
</style>