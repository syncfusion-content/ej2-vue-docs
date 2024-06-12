<template>
  <div id="app">
    <ejs-accumulationchart id="container" :tooltip='tooltip' :tooltipRender='tooltipRender'>
      <e-accumulation-series-collection>
        <e-accumulation-series :dataSource='seriesData' xName='x' yName='y' radius='70%'> </e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { AccumulationChartComponent as EjsAccumulationchart, AccumulationSeriesCollectionDirective as EAccumulationSeriesCollection, AccumulationSeriesDirective as EAccumulationSeries, PieSeries, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 },
  { x: 'Mar', y: 7 }, { x: 'Apr', y: 13.5 },
  { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 },
  { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
  { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }
];
const tooltip = {
  enable: true
};

provide('accumulationchart', [PieSeries, AccumulationTooltip]);

const tooltipRender = (args) => {
  if (args.point.index === 3) {
    args.text = args.point.x + '' + ':' + args.point.y + '' + ' ' + 'customtext';
    args.textStyle.color = '#f48042';
  }
}

</script>
<style>
#container {
  height: 350px;
}
</style>