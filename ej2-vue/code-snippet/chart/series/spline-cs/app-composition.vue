<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Spline' xName='x' yName='y' name='London' width=2 :marker='marker'
          fill="red" :border="border" dashArray='2.5'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, SplineSeries, Category } from "@syncfusion/ej2-vue-charts";


const seriesData = [
  { x: 'Jan', y: -1 }, { x: 'Feb', y: -1 }, { x: 'Mar', y: 2 },
  { x: 'Apr', y: 8 }, { x: 'May', y: 13 }, { x: 'Jun', y: 18 },
  { x: 'Jul', y: 21 }, { x: 'Aug', y: 20 }, { x: 'Sep', y: 16 },
  { x: 'Oct', y: 10 }, { x: 'Nov', y: 4 }, { x: 'Dec', y: 0 }
];
const border = {
  width: 2, color: 'yellow'
};
const primaryXAxis = {
  title: 'Month',
  valueType: 'Category'
};
const marker = { visible: true, width: 10, height: 10 };
const title = "Climate Graph-2012";

provide('chart', [SplineSeries, Category]);

</script>
<style>
#container {
  height: 350px;
}
</style>