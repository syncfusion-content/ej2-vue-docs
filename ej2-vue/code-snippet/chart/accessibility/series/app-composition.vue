<template>
  <div id="app">
    <ejs-accumulationchart id="container" :title='title' :legendSettings='legendSettings'>
      <e-accumulation-series-collection>
        <e-accumulation-series :accessibility='accessibility' :dataSource='seriesData' type='Pyramid' xName='x' yName='y'> </e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { AccumulationChartComponent as EjsAccumulationchart, AccumulationSeriesCollectionDirective as EAccumulationSeriesCollection, AccumulationSeriesDirective as EAccumulationSeries, PyramidSeries, AccumulationLegend } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 'Australia', y: 20 },
  { x: 'France',    y: 22 },
  { x: 'China',     y: 23 },
  { x: 'India',     y: 24 },
  { x: 'Japan',     y: 25 },
  { x: 'Germany',   y: 27 }
];
const title = 'Sales Distribution of Car by Region';
const accessibility = {
  accessibilityDescription: 'This pyramid chart represents the sales distribution of cars by region, with each section representing a different region and its respective sales percentage.',
  accessibilityRole: 'presentation'
};
const legendSettings = { visible: false };

provide('accumulationchart', [PyramidSeries, AccumulationLegend]);

</script>
<style>
  #container {
    height: 350px;
  }
</style>