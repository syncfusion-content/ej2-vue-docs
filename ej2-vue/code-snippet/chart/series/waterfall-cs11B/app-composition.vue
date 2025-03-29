<template>
  <div id="app">
    <ejs-chart id="container" :primaryXAxis='primaryXAxis' :pointRender='pointRender'>
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
const pointRender= function (args) {
  if (args.point.index === 0) {
    args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
  }
  if (args.point.index === 3) {
    args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
  }
  if (args.point.index === 4) {
    args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
  }
  if (args.point.index === 6) {
    args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
  }
};

</script>
<style>
  #container {
    height: 350px;
  }
</style>