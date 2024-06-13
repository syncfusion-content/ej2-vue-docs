<template>
  <div id="app">
    <ejs-accumulationchart id='chartcontainer' :title='title' :legendSettings='legendSettings' :tooltip='tooltip'
      enableSmartLables='true' :enableAnimation='enableAnimation' :center='center'>
      <e-accumulation-series-collection>
        <e-accumulation-series :dataSource='seriesData' :startAngle='startAngle' :endAngle='endAngle' :radius='radius'
          xName='x' yName='y' :dataLabel='dataLabel' name='Browser' innerRadius='0%'> </e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { AccumulationChartComponent as EjsAccumulationchart, AccumulationSeriesCollectionDirective as EAccumulationSeriesCollection, AccumulationSeriesDirective as EAccumulationSeries, PieSeries, AccumulationDataLabel } from "@syncfusion/ej2-vue-charts";


const seriesData = [
  { 'x': 'Chrome', y: 37, text: '37%' }, { 'x': 'UC Browser', y: 17, text: '17%' },
  { 'x': 'iPhone', y: 19, text: '19%' },
  { 'x': 'Others', y: 4, text: '4%' }, { 'x': 'Opera', y: 11, text: '11%' },
  { 'x': 'Android', y: 12, text: '12%' }
];
const dataLabel = {
  visible: true,
  position: 'Inside', name: 'text',
  font: {
    fontWeight: '600'
  }
}
const enableAnimation = false;
const legendSettings = {
  visible: false,
};
const tooltip = { enable: false, format: '${point.x} : <b>${point.y}%</b>' };
const startAngle = '0';
const endAngle = '360';
const radius = '70%';
const center = { x: '50%', y: '50%' };
const title = "Mobile Browser Statistics";

provide('accumulationchart', [PieSeries, AccumulationDataLabel]);

</script>
<style>
#container {
  height: 350px;
}
</style>