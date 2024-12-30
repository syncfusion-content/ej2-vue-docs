<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :focusBorderColor="focusBorderColor" :focusBorderWidth="focusBorderWidth" :focusBorderMargin="focusBorderMargin"  :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :accessibility='accessibility' :tooltip='tooltip' :legendSettings='legendSettings'>
      <e-series-collection>
        <e-series :dataSource='seriesData' name='Sales' type='Line' xName='month' yName='sales' :marker='marker'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, Category, LineSeries, Tooltip, Legend, DataLabel } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { month: 'Jan', sales: 35 },
  { month: 'Feb', sales: 28 },
  { month: 'Mar', sales: 34 },
  { month: 'Apr', sales: 32 },
  { month: 'May', sales: 40 },
  { month: 'Jun', sales: 32 },
  { month: 'Jul', sales: 35 },
  { month: 'Aug', sales: 55 },
  { month: 'Sep', sales: 38 },
  { month: 'Oct', sales: 30 },
  { month: 'Nov', sales: 25 },
  { month: 'Dec', sales: 32 }
];
const primaryXAxis = {
  valueType: 'Category'
};
const primaryYAxis = {
  labelFormat: '${value}K'
};
const marker = {
  visible: true,
  dataLabel: {
    visible: true
  }
};
const title = "Sales Analysis";
const accessibility = {
  accessibilityDescription: 'A line chart displaying the sales analysis for each month.',
  accessibilityRole: 'chart'
};
const focusBorderColor='#FF0000';
const focusBorderWidth=3;
const focusBorderMargin=5;
const tooltip = { enable: true };
const legendSettings = { visible: true };

provide('chart', [Category, LineSeries, Tooltip, Legend, DataLabel]);

</script>
<style>
  #container {
    height: 350px;
  }
</style>