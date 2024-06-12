<template>
  <div id="app">
    <ejs-chart id="container" :primaryXAxis='primaryXAxis' width='350px'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Internet'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: "South Korea", y: 39.4 }, { x: "India", y: 61.3 }, { x: "Pakistan", y: 20.4 },
  { x: "Germany", y: 65.1 }, { x: "Australia", y: 15.8 }, { x: "Italy", y: 29.2 },
  { x: "France", y: 44.6 }, { x: "Saudi Arabia", y: 9.7 }, { x: "Russia", y: 40.8 },
  { x: "Mexico", y: 31 }, { x: "Brazil", y: 75.9 }, { x: "China", y: 51.4 }
];
const primaryXAxis = {
  valueType: 'Category',
  labelIntersectAction: 'Rotate90'
};

provide('chart', [ColumnSeries, Category]);
</script>
<style>
#container {
  height: 350px;
}
</style>