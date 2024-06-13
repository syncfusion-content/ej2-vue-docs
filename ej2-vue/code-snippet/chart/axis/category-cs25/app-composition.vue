<template>
  <div id="app">
    <ejs-chart id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
      :chartArea='chartArea'>
      <e-series-collection>
        <e-series :pointColorMapping='pointColorMapping' :dataSource='seriesData' type='Column' xName='x' yName='y'
          :cornerRadius='cornerRadius'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 'Jan', y: 6.96, color: "red" },
  { x: 'Feb', y: 8.9, color: "blue" },
  { x: 'Mar', y: 12, color: "orange" },
  { x: 'Apr', y: 17.5, color: "aqua" },
  { x: 'May', y: 22.1, color: "grey" }
];
const primaryXAxis = {
  valueType: 'Category', majorGridLines: { width: 0 }
};
const pointColorMapping = "color";
const primaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}°C',
};
const chartArea = {
  border: {
    width: 0
  }
};
const title = "USA CLIMATE - WEATHER BY MONTH";
const cornerRadius = {
  topLeft: 10, topRight: 10
};

provide('chart', [ColumnSeries, Category]);

</script>
<style>
#container {
  height: 350px;
}
</style>