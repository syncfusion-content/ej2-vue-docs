<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :width='width'
      :tooltip='tooltip'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='series1' :marker='marker'
          :lastValueLabel='lastValueLabel'></e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";

import {
  ChartComponent as EjsChart, ColumnSeries, Category, DataLabel, Legend, LastValueLabel, Tooltip
  SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries
} from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 2005, y: 28 }, { x: 2006, y: 25 }, { x: 2007, y: 26 },
  { x: 2008, y: 27 }, { x: 2009, y: 32 }, { x: 2010, y: 35 },
  { x: 2011, y: 40 }
];

const primaryXAxis = {
  title: 'Year',
  interval: 1
};

const primaryYAxis = {
  title: 'Efficiency',
  labelFormat: '{value}%'
};

const marker = {
  visible: false,
  dataLabel: { visible: true }
};

const lastValueLabel = { enable: true };
const tooltip = { enable: true };
const width = '90%';
const title = "Efficiency of oil-fired power production";

provide('chart', [LineSeries, Category, DataLabel, LastValueLabel]);

</script>
<style>
#container {
  height: 350px;
}
</style>