<template>
  <div id="app">
    <ejs-accumulationchart id="container" :legendSettings='legendSettings'>
      <e-accumulation-series-collection>
        <e-accumulation-series :dataSource='seriesData' xName='x' yName='y' legendShape='Rectangle'>
        </e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
    <ejs-button id='add' @click.native='onClick'>Add Point</ejs-button>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { AccumulationChartComponent as EjsAccumulationchart, AccumulationSeriesCollectionDirective as EAccumulationSeriesCollection, AccumulationSeriesDirective as EAccumulationSeries, PieSeries, AccumulationDataLabel, AccumulationLegend } from "@syncfusion/ej2-vue-charts";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

const seriesData = [
{ x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 }, { x: 'Mar', y: 7 }, { x: 'Apr', y: 13.5 }, { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 }, { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
{ x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }, { x: 'Nov', y: 15 }
];
const legendSettings = { visible: true};

provide('accumulationchart', [PieSeries, AccumulationDataLabel, AccumulationLegend]);

const onClick = function() {     
  this.$refs.chart.ej2Instances.series[0].removePoint(0);
};
</script>
<style>
#container {
  height: 350px;
}
</style>