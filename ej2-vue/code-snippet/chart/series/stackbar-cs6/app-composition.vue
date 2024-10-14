<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='StackingBar' xName='x' yName='y' name='John' stackingGroup='JohnAndAndrew'> </e-series>
        <e-series :dataSource='seriesData' type='StackingBar' xName='x' yName='y1' name='Andrew' stackingGroup='JohnAndAndrew'> </e-series>
        <e-series :dataSource='seriesData' type='StackingBar' xName='x' yName='y2' name='Thomas' stackingGroup='ThomasAndMichael'> </e-series>
        <e-series :dataSource='seriesData' type='StackingBar' xName='x' yName='y3' name='Michael' stackingGroup='ThomasAndMichael'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, StackingBarSeries } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 2007, y: 453, y1: 876, y2: 356, y3: 122 },
  { x: 2008, y: 354, y1: 564, y2: 876, y3: 444 },
  { x: 2009, y: 282, y1: 242, y2: 898, y3: 222 },
  { x: 2010, y: 321, y1: 121, y2: 567, y3: 231 },
  { x: 2011, y: 333, y1: 343, y2: 456, y3: 122 },
  { x: 2012, y: 351, y1: 451, y2: 345, y3: 333 },
  { x: 2013, y: 403, y1: 203, y2: 543, y3: 354 },
  { x: 2014, y: 421, y1: 431, y2: 654, y3: 100 }
];
const primaryXAxis = {
  title: 'Year',
  minimum: 2006,
  maximum: 2015,
  interval: 1
};
const primaryYAxis = {
  title: 'Sales Percentage(%)'
};
const title = 'Sales by year';

provide('chart', [StackingBarSeries]);

</script>
<style>
#container {
  height: 350px;
}
</style>