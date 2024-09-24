<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='MultiColoredLine' xName='month' yName='sales' pointColorMapping='color' width=3> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, Category, LineSeries } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { month: 'Jan', sales: 35, color: '#1f77b4' },
  { month: 'Feb', sales: 28, color: '#ff7f0e' },
  { month: 'Mar', sales: 34, color: '#2ca02c' },
  { month: 'Apr', sales: 32, color: '#d62728' },
  { month: 'May', sales: 40, color: '#9467bd' },
  { month: 'Jun', sales: 32, color: '#8c564b' },
  { month: 'Jul', sales: 35, color: '#e377c2' },
  { month: 'Aug', sales: 55, color: '#7f7f7f' },
  { month: 'Sep', sales: 38, color: '#bcbd22' },
  { month: 'Oct', sales: 30, color: '#17becf' },
  { month: 'Nov', sales: 25, color: '#ff69b4' },
  { month: 'Dec', sales: 32, color: '#ff6347' }
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

</script>
<style>
#container {
  height: 350px;
}
</style>