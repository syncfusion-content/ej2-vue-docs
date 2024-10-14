<template>
  <div id="app">
    <ejs-chart id="container" :primaryXAxis='primaryXAxis' :seriesRender='seriesRender'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Waterfall' xName='x' yName='y' :intermediateSumIndexes='intermediate' :sumIndexes='sum'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, WaterfallSeries, Category } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 'Income', y: 4711 },
  { x: 'Sales', y: -1015 },
  { x: 'Development', y: -688 },
  { x: 'Revenue', y: 1030 },
  { x: 'Balance' },
  { x: 'Administrative', y: -780 },
  { x: 'Expense', y: -361 },
  { x: 'Tax', y: -695 },
  { x: 'Net Profit' }
];
const primaryXAxis = {
  valueType: 'Category'
};
const sum = [8];
const intermediate = [4];

provide('chart', [WaterfallSeries, Category]);
const seriesRender = function (args) {
  args.fill = '#ff6347';
  args.series.negativeFillColor = '#ff6347';
  args.series.summaryFillColor = '#ff6347';
};

</script>
<style>
  #container {
    height: 350px;
  }
</style>