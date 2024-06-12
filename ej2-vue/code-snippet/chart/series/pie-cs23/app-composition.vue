<template>
  <div id="app">
    <ejs-accumulationchart id="container" ref="pie" style='display:block;' :legendSettings="legendSettings"
      :tooltip="tooltip" :enableAnimation='enableAnimation' :enableSmartLabels='enableSmartLabels'>
      <e-accumulation-series-collection>
        <e-accumulation-series :dataSource='data' xName='x' yName='y' :radius='radius' innerRadius="20%"
          :dataLabel="dataLabel"> </e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { AccumulationChartComponent as EjsAccumulationchart, AccumulationSeriesCollectionDirective as EAccumulationSeriesCollection, AccumulationSeriesDirective as EAccumulationSeries, AccumulationDataLabel, PieSeries } from "@syncfusion/ej2-vue-charts";

const data = [
  { x: 'Argentina', y: 505370, r: '100' },
  { x: 'Belgium', y: 551500, r: '118.7' },
  { x: 'Cuba', y: 312685, r: '124.6' },
  { x: 'Dominican Republic', y: 350000, r: '137.5' },
  { x: 'Egypt', y: 301000, r: '150.8' },
  { x: 'Kazakhstan', y: 300000, r: '155.5' },
  { x: 'Somalia', y: 357022, r: '160.6' }
];
const radius = 'r';
const legendSettings = { visible: true };
const dataLabel = { visible: true, position: 'Outside', name: 'x' };
const tooltip = {
  enable: true, header: '<b>${point.x}</b>', format: 'Composition: <b>${point.y}</b>'
};
const enableAnimation = true;
const enableSmartLabels = true;

provide('accumulationchart', [PieSeries, AccumulationDataLabel]);

</script>
<style>
#container {
  height: 350px;
}
</style>