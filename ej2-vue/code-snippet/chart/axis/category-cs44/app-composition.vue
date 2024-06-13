<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='month' yName='sales' name='Sales'
          :emptyPointSettings='emptyPointSettings'></e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, ColumnSeries, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, LineSeries, Category } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { month: 'Jan', sales: 35 }, { month: 'Feb', sales: null },
  { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
  { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
  { month: 'Jul', sales: undefined }, { month: 'Aug', sales: 55 },
  { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
  { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];
const primaryXAxis = {
  valueType: 'Category'
};
const emptyPointSettings = {
  mode: "Average",
  fill: 'red',
  border: { width: 2, color: 'violet' }
};
const title = "Olympic Medals";

provide('chart', [ColumnSeries, LineSeries, Category]);

</script>
<style>
#container {
  height: 350px;
}
</style>