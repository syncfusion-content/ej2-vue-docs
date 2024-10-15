<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Waterfall' xName='x' yName='y' :intermediateSumIndexes='intermediate' :sumIndexes='sum' summaryFillColor='black' negativeFillColor='green'
          :connector='connector' :marker='marker'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, WaterfallSeries, Category, DataLabel } from "@syncfusion/ej2-vue-charts";

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
const primaryYAxis = {
  labelFormat: '${value}M'
};
const sum = [8];
const intermediate = [4];
const connector = { 
  color: 'blue', 
  width: 1.5 
};
const marker = {
  dataLabel: {
    visible: true,
    position: 'Outer',
    font: { size: '11px' }
  }
};
const title = 'Company Revenue and Profit';

provide('chart', [WaterfallSeries, Category, DataLabel]);

</script>
<style>
  #container {
    height: 350px;
  }
</style>