<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :titleStyle='titleStyle' :subTitleStyle='subTitleStyle' :subTitle='subTitle' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
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
const subTitle= "Medal Comparison";
const titleStyle = {
  accessibility: {
    accessibilityDescription: 'This chart shows the number of gold, silver, and bronze medals won by different countries in the Olympics.',
    accessibilityRole: 'heading'
  }
};
const subTitleStyle = {
        accessibility: {
            accessibilityDescription: 'The subtitle provides additional context for the Olympic medal distribution chart.',
            accessibilityRole: 'heading'
        }
    };
provide('chart', [ColumnSeries, Category]);

</script>
<style>
  #container {
    height: 350px;
  }
</style>