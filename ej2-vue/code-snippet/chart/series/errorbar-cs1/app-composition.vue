<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' name='India' width=2 :marker='marker'
          :errorBar='errorBar'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, LineSeries, Category, ErrorBar } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 2006, y: 7.8 }, { x: 2007, y: 7.2 },
  { x: 2008, y: 6.8 }, { x: 2009, y: 10.7 },
  { x: 2010, y: 10.8 }, { x: 2011, y: 9.8 }
];
const primaryXAxis = {
  minimum: 2005, maximum: 2012, interval: 1,
  title: 'Year'
};
const errorBar = {
  visible: true
};
const marker = {
  visible: true
};
const title = "Olympic Medals";

provide('chart', [LineSeries, Category, ErrorBar]);

</script>
<style>
#container {
  height: 350px;
}
</style>