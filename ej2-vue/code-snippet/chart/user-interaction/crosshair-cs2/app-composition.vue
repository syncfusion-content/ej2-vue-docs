<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
      :crosshair='crosshair'>
      <e-series-collection>
        <e-series :dataSource='seriesData1' type='Line' xName='x' yName='y' name='Temperature'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, LineSeries, Crosshair, DateTime } from "@syncfusion/ej2-vue-charts";



let series1 = [];
let point1;
let value = 40;
let i;
for (i = 1; i < 500; i++) {
  if (Math.random() > .5) {
    value += Math.random();
  } else {
    value -= Math.random();
  }
  point1 = { x: new Date(1950, i + 2, i), y: value.toFixed(1) };
  series1.push(point1);
}


const seriesData1 = series1;
const primaryXAxis = {
  valueType: 'DateTime',
  crosshairTooltip: { enable: true },
  labelFormat: 'yMMM'
};
const primaryYAxis = {
  crosshairTooltip: { enable: true }
};
const title = "Weather Condition";
const crosshair = { enable: true };

provide('chart', [LineSeries, Crosshair, DateTime]);

</script>
<style>
#container {
  height: 350px;
}
</style>