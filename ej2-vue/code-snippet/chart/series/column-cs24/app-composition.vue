<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='country' yName='gold' columnFacet='Cylinder' tooltipMappingName='tooltipMappingName'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries, Category, Tooltip } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { country: "USA",       gold: 50, tooltipMappingName:'USA' }, 
  { country: "Japan",     gold: 70, tooltipMappingName:'Japan' }, 
  { country: "Australia", gold: 60, tooltipMappingName:'Australia' },
  { country: "France",    gold: 50, tooltipMappingName:'France' }, 
  { country: "Italy",     gold: 40, tooltipMappingName:'Italy' }, 
  { country: "Sweden",    gold: 55, tooltipMappingName:'Sweden' }
];
const primaryXAxis = {
  valueType: 'Category',
  interval: 1
};
const primaryYAxis = {
  minimum: 0, 
  maximum: 80,
  interval: 10, 
  title: 'Medal Count'
};
const title = 'Olympic Gold Medal Counts - RIO';
const tooltip = { 
  enable: true, 
  header: "<b>${point.tooltip}</b>", 
  format: "Gold Medal: <b>${point.y}</b>" 
};

provide('chart', [ColumnSeries, Category, Tooltip]);

</script>
<style>
  #container {
    height: 350px;
  }
</style>