<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData1' type='Column' xName='x' yName='y'> </e-series>
        <e-series :dataSource='seriesData2' type='Column' xName='x' yName='y'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";

const seriesData1 = [
  { x: 'Myanmar', y: 7.3 }, { x: 'India', y: 7.9 }, { x: 'Bangladesh', y: 6.8 },
  { x: 'Cambodia', y: 7.0 }, { x: 'China', y: 6.9 }
];
const seriesData2 = [
  { x: 'Poland', y: 2.7 }, { x: 'Australia', y: 2.5 }, { x: 'Singapore', y: 2.0 },
  { x: 'Canada', y: 1.4 }, { x: 'Germany', y: 1.8 }
];
const primaryXAxis = {
  valueType: 'Category',
  isIndexed: true
};
const title = "Olympic Medals";

provide('chart', [ColumnSeries, Category]);

</script>
<style>
#container {
  height: 350px;
}
</style>