<template>
  <div id="app">
    <ejs-accumulationchart id="container" :tooltip='tooltip' :legendSettings='legendSettings'>
      <e-accumulation-series-collection>
        <e-accumulation-series :dataSource='seriesData' xName='x' yName='y'>
        </e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { AccumulationChartComponent as EjsAccumulationchart, AccumulationSeriesCollectionDirective as EAccumulationSeriesCollection, AccumulationSeriesDirective as EAccumulationSeries, PieSeries, AccumulationTooltip, AccumulationLegend } from "@syncfusion/ej2-vue-charts";


const seriesData = [
  { x: 'Jan', y: 13 },
  { x: 'Feb', y: 13 },
  { x: 'Mar', y: 17 },
  { x: 'Apr', y: 13.5 }
];
const tooltip = {
  enable: true, 
  enableHighlight: true
};
const legendSettings = { visible: false };

provide('accumulationchart', [PieSeries, AccumulationTooltip, AccumulationLegend]);

</script>
<style>
  #container {
    height: 350px;
  }
</style>