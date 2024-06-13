<template>
  <div id="app">
    <ejs-accumulationchart id="container">
      <e-accumulation-series-collection>
        <e-accumulation-series :dataSource='seriesData' type='Pyramid' xName='x' yName='y' pyramidMode='Surface'>
        </e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { AccumulationChartComponent as EjsAccumulationchart, AccumulationSeriesCollectionDirective as EAccumulationSeriesCollection, AccumulationSeriesDirective as EAccumulationSeries, PyramidSeries } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 'Australia', y: 20, text: 'Australia 20%' },
  { x: 'France', y: 22, text: 'France 22%' },
  { x: 'China', y: 23, text: 'China 23%' },
  { x: 'India', y: 24, text: 'India 24%' },
  { x: 'Japan', y: 25, text: 'Japan 25%' },
  { x: 'Germany', y: 27, text: 'Germany 27%' }
];

provide('accumulationchart', [PyramidSeries]);

</script>
<style>
#container {
  height: 350px;
}
</style>