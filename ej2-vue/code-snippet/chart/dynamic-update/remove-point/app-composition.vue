<template>
  <div id="app">
    <ejs-chart ref="chart" id="container" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :title='title' :legendSettings='legendSettings' :chartArea='chartArea'>
        <e-series-collection>
          <e-series :dataSource='seriesData' type='Spline' xName='x' yName='y' name='Users' width=2 :marker='marker'></e-series>
        </e-series-collection>
    </ejs-chart>
    <ejs-button id='add' @click.native='onClick'>Add Point</ejs-button>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, SplineSeries, Category, DataLabel, Legend } from "@syncfusion/ej2-vue-charts";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

const chart = ref(null);
const seriesData = [
  { x: "Germany", y: 72 },
  { x: "Russia", y: 103.1 },
  { x: "Brazil", y: 139.1 },
  { x: "India", y: 462.1 },
  { x: "China", y: 721.4 },
  { x: "USA", y: 286.9 },
  { x: "Great Britain", y: 115.1 },
  { x: "Nigeria", y: 97.2 }
];
const primaryXAxis = {
  valueType: 'Category', 
  enableTrim: false, 
  majorTickLines: { width: 0 }, 
  majorGridLines: { width: 0 }
};
const primaryYAxis = {
  minimum: 0, 
  maximum: 800, 
  labelFormat: '{value}M', 
  edgeLabelPlacement: 'Shift'
};
const marker = {
  visible: true, 
  dataLabel: { 
    visible: true, 
    position: 'Top', 
    font: { 
      fontWeight: '600' 
    } 
  }
};
const title = 'Internet Users - 2016';
const legendSettings = {
  visible: false
};
const chartArea = {
  border: {
    width: 1
  }
};

provide('chart', [SplineSeries, Category, DataLabel, Legend]);

const onClick = function() {     
  this.$refs.chart.ej2Instances.series[0].removePoint(0);
};

</script>
<style>
  #container {
    height: 350px;
  }
</style>