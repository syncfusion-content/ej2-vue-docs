<template>
  <div id="app">
    <ejs-chart id="container" :title='title'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Bar' xName='x' yName='y' name='India'> </e-series>
        <e-series :dataSource='seriesData' type='Bar' xName='x' yName='y1' name='India' columnSpacing="1.5"
          columnWidth="1.25"> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, BarSeries } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 2006, y: 7.8, y1: 7 }, { x: 2007, y: 7.2, y1: 6.8 },
  { x: 2008, y: 6.8, y1: 6 }, { x: 2009, y: 10.7, y1: 4.5 },
  { x: 2010, y: 10.8, y1: 3 }, { x: 2011, y: 9.8, y1: 4 }
];
const title = "Unemployment rate (%)";

provide('chart', [BarSeries]);

</script>
<style>
#container {
  height: 350px;
}
</style>