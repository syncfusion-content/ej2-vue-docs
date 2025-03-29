<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :pointRender='pointRender'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='country' yName='gold'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";

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
  title: 'Countries'
};
const primaryYAxis = {
  minimum: 0, 
  maximum: 80,
  interval: 20, 
  title: 'Medals'
};
const title = 'Olympic Medals';

provide('chart', [ColumnSeries, Category]);

const pointRender = function (args) {
  if (args.point.index === 1) {
    args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
  }
  if (args.point.index === 4) {
    args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
  }
};

</script>
<style>
  #container {
    height: 350px;
  }
</style>