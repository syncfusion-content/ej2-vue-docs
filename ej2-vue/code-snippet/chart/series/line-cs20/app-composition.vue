<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :seriesRender='seriesRender'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Line' xName='month' yName='sales' width=2> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, Category, LineSeries } from "@syncfusion/ej2-vue-charts";

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
  valueType: 'Category',
  title: 'Month'
};
const primaryYAxis = {
  title: 'Sales count'
};
const title = "Monthly Sales Comparison";

provide('chart', [Category, LineSeries]);

const seriesRender = function (args) {
  args.fill = '#ff6347';
};

</script>
<style>
  #container {
    height: 350px;
  }
</style>