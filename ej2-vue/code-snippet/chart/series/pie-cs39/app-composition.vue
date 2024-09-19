<template>
  <div id="app">
    <ejs-accumulationchart id='chartcontainer' width='92%' :title='title' :legendSettings='legendSettings'
       :enableAnimation='enableAnimation'>
      <e-accumulation-series-collection>
        <e-accumulation-series :dataSource='seriesData' :startAngle='startAngle' :endAngle='endAngle' :radius='radius'
          xName='x' yName='y' name='Browser' innerRadius='60%' borderRadius='8'> </e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { AccumulationChartComponent as EjsAccumulationchart, AccumulationSeriesCollectionDirective as EAccumulationSeriesCollection, AccumulationSeriesDirective as EAccumulationSeries, PieSeries, AccumulationLegend } from "@syncfusion/ej2-vue-charts";


const seriesData = [
{ x: 'Argentina', y: 505370, r: '100' },
        { x: 'Belgium', y: 551500, r: '118.7' },
        { x: 'Cuba', y: 312685, r: '124.6' },
        { x: 'Dominican Republic', y: 350000, r: '137.5' },
        { x: 'Egypt', y: 301000, r: '150.8' },
        { x: 'Kazakhstan', y: 300000, r: '155.5' },
        { x: 'Somalia', y: 357022, r: '160.6' }
];
const enableAnimation = true;
const legendSettings = {
  visible: false,
};
const startAngle = '0';
const endAngle = '360';
const radius = '70%';
const title = "Mobile Browser Statistics";

provide('accumulationchart', [PieSeries, AccumulationLegend]);

</script>
<style>
#container {
  height: 350px;
}
</style>