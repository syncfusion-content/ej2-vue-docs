<template>
  <div id="app">
    <ejs-accumulationchart id="container" :tooltip='tooltip'>
      <e-accumulation-series-collection>
          <e-accumulation-series :dataSource='seriesData' xName='x' yName='y' :borderRadius='3'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { AccumulationChartComponent as EjsAccumulationchart, AccumulationSeriesCollectionDirective as EAccumulationSeriesCollection, AccumulationSeriesDirective as EAccumulationSeries, AccumulationTooltip, PieSeries } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 'Coal', y: 34.4, text: 'Coal: 34.4%' },
  { x: 'Natural Gas', y: 22.1, text: 'Natural Gas: 22.1%' },
  { x: 'Hydro', y: 14.4, text: 'Hydro: 14.4%' },
  { x: 'Nuclear', y: 9.0, text: 'Nuclear: 9.0%' },
  { x: 'Wind', y: 8.1, text: 'Wind: 8.1%' },
  { x: 'Others', y: 12.0, text: 'Others: 12.0%' }
];

const tooltip = {
  enable: true,
  followPointer: true,
  format: '<b>${point.x}</b><br>Percentage: <b>${point.y}%</b>'
};

provide('accumulationchart', [AccumulationTooltip, PieSeries]);
</script>

<style>
  #container {
    height: 350px;
  }
</style>
