<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' name='Product X'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, LineSeries, Logarithmic, DateTime } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: new Date(1995, 0, 1), y: 80 }, { x: new Date(1996, 0, 1), y: 200 },
  { x: new Date(1997, 0, 1), y: 400 }, { x: new Date(1998, 0, 1), y: 600 },
  { x: new Date(1999, 0, 1), y: 700 }, { x: new Date(2000, 0, 1), y: 1400 },
  { x: new Date(2001, 0, 1), y: 2000 }, { x: new Date(2002, 0, 1), y: 4000 },
  { x: new Date(2003, 0, 1), y: 6000 }, { x: new Date(2004, 0, 1), y: 8000 },
  { x: new Date(2005, 0, 1), y: 11000 }
];
const primaryXAxis = {
  valueType: 'DateTime',
  title: 'Years',
  labelFormat: 'y'
};
const primaryYAxis = {
  valueType: 'Logarithmic',
  title: 'Profit',
  interval: 2
};
const title = "Product X Growth [1995-2005]";

provide('chart', [LineSeries, Logarithmic, DateTime]);

</script>
<style>
#container {
  height: 350px;
}
</style>