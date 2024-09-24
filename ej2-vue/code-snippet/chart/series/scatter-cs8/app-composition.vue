<template>
    <div id="app">
        <ejs-chart id="container" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :title='title' :seriesRender='seriesRender'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Scatter' xName='x' yName='y' :marker='marker'>
                </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ScatterSeries } from "@syncfusion/ej2-vue-charts";

const seriesData = [
    { x: 1, y: 15 }, { x: 2, y: 25 }, { x: 3, y: 35 }, { x: 4, y: 45 },
    { x: 5, y: 55 }, { x: 6, y: 60 }, { x: 7, y: 65 }, { x: 8, y: 70 },
    { x: 9, y: 75 }, { x: 10, y: 80 }, { x: 11, y: 85 }, { x: 12, y: 90 },
    { x: 13, y: 92 }, { x: 14, y: 94 }, { x: 15, y: 96 }, { x: 16, y: 97 },
    { x: 17, y: 98 }, { x: 18, y: 99 }, { x: 19, y: 100 }, { x: 20, y: 100 }
];
const primaryXAxis = {
    minimum: 0,
    maximum: 21,
    interval: 3,
    majorGridLines: { width: 0 },
    title: 'Study Hours (Per Week)'
};
const primaryYAxis = {
    title: 'Test Scores (%)',
    minimum: 0,
    maximum: 120,
    interval: 20,
    labelFormat: '{value}%'
};
const title = 'Relationship Between Study Hours and Test Scores';
const marker = { 
    visible: false,
    width: 10,
    height: 10,
    shape: 'Circle'
};

provide('chart', [ScatterSeries]);
const seriesRender = function (args) {
  args.fill = '#ff6347';
};

</script>
<style>
  #container {
    height: 350px;
  }
</style>