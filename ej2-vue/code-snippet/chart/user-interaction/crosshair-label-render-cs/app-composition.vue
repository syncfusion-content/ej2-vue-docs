<template>
  <div id="app">
    <ejs-chart id="container" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :crosshair='crosshair' :crosshairLabelRender='crosshairLabelRender'>
      <e-series-collection>
        <e-series :dataSource='seriesData' xName='x' yName='y' type='Line' name='Series'></e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, LineSeries, Crosshair, Category } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 'January', y: 1200 },
  { x: 'February', y: 900 },
  { x: 'March', y: 1500 },
  { x: 'April', y: 700 },
  { x: 'May', y: 2000 },
  { x: 'June', y: 300 }
];

const primaryXAxis = {
  valueType: 'Category',
  crosshairTooltip: { enable: true }
};
const primaryYAxis = {
  crosshairTooltip: { enable: true }
};

const crosshair = {
  enable: true
};

const crosshairLabelRender = function(args) {
  if (args.axisName === 'primaryYAxis' && typeof args.value === 'number') {
    if (args.value > 1000) {
      args.text = (args.value / 1000).toFixed(1) + 'K';
      args.textStyle = args.textStyle || {};
      args.textStyle.color = '#d32f2f';
      args.fill = '#ffebee';
    }
    if (args.value < 0) {
      args.cancel = true;
    }
  }
  if (args.axisOrientation === 'Horizontal' && typeof args.text === 'string') {
    if (args.text.length > 8) {
      args.text = args.text.substring(0, 8) + '...';
    }
  }
};

provide('chart', [LineSeries, Crosshair, Category]);
</script>

<style>
  #container {
    height: 350px;
  }
</style>
