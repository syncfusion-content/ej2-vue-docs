<template>
  <div id="app">
    <ejs-accumulationchart id="container" :legendSettings='legendSettings'>
      <e-accumulation-series-collection>
        <e-accumulation-series :dataSource='seriesData' xName='x' yName='y'> </e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { AccumulationChartComponent as EjsAccumulationchart, AccumulationSeriesCollectionDirective as EAccumulationSeriesCollection, AccumulationSeriesDirective as EAccumulationSeries, PieSeries, AccumulationLegend } from "@syncfusion/ej2-vue-charts";


const seriesData = [
  { 'x': 'Net-tution', y: 21, text: '21%' },
  { 'x': 'Private Gifts', y: 8, text: '8%' },
  { 'x': 'All Other', y: 9, text: '9%' },
  { 'x': 'Local Revenue', y: 4, text: '4%' },
  { 'x': 'State Revenue', y: 21, text: '21%' },
  { 'x': 'Federal Revenue', y: 16, text: '16%' },
  { 'x': 'Self-supporting Operations', y: 21, text: '21%' },
];

const legendSettings = { visible: true, position: 'Right', textWrap: 'Wrap', maximumLabelWidth: 60, height: '44%', width: '64%' };

provide('accumulationchart', [PieSeries, AccumulationLegend]);

</script>
<style>
#container {
  height: 350px;
}
</style>