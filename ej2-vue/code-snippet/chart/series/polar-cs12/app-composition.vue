<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Radar' xName='country' yName='gold' drawType='Column'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, Category, RadarSeries, ColumnSeries } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { country: "USA",       gold: 50 },
  { country: "China",     gold: 40 },
  { country: "Japan",     gold: 70 },
  { country: "Australia", gold: 60 },
  { country: "France",    gold: 50 },
  { country: "Germany",   gold: 40 },
  { country: "Italy",     gold: 40 },
  { country: "Sweden",    gold: 30 }
];
const primaryXAxis = {
  valueType: 'Category',
  title: 'Countries',
  startAngle: 120
};
const primaryYAxis = {
  title: 'Medals'
};
const title = "Olympic Medals";

provide('chart', [Category, RadarSeries, ColumnSeries]);

</script>
<style>
  #container {
    height: 350px;
  }
</style>