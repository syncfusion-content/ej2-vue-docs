<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Years'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 2008, y: 15.1 }, { x: 2009, y: 16 }, { x: 2010, y: 21.4 },
  { x: 2011, y: 18 }, { x: 2012, y: 16.2 }, { x: 2013, y: 11 },
  { x: 2014, y: 7.6 }, { x: 2015, y: 1.5 }
];
const primaryYAxis =
{
  isInversed: true
};
const title = "Exchange Rate";

provide('chart', [ColumnSeries]);
</script>
<style>
#container {
  height: 350px;
}
</style>