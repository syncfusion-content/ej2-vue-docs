<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='group.x' yName='group.y' name='USA'
          enableComplexProperty="true"> </e-series>
        <e-series :dataSource='seriesData' type='Column' xName='group.x' yName='y' name='UK'
          enableComplexProperty="true"> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries, LineSeries, Category } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { group: { x: 'Aaa', y: 10 }, y: 20 },
  { group: { x: 'Baa', y: 30 }, y: 10 }
];
const primaryXAxis = {
  valueType: 'Category'
};
const title = "Annual Growth GDP in France";

provide('chart', [ColumnSeries, LineSeries, Category]);

</script>
<style>
#container {
  height: 350px;
}
</style>