<template>
    <div id="app">
        <ejs-chart id="container" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :title='title'>
            <e-series-collection>
                <e-series :dataSource='seriesData1' type='Scatter' xName='x' yName='y' name='Male' :marker='marker'>
                </e-series>
                <e-series :dataSource='seriesData2' type='Scatter' xName='x' yName='y' name='Female' :marker='marker1' fill='red'>
                </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ScatterSeries, Legend } from "@syncfusion/ej2-vue-charts";

let series1 = [];
let series2 = [];
let point1;
let value = 80;
let value1 = 70;
let i;
for (i = 1; i < 50; i++) {
    if (Math.random() > 0.5) {
        value += Math.random();
    } else {
        value -= Math.random();
    }
    value = value < 60 ? 60 : value > 90 ? 90 : value;
    point1 = { x: 120 + (i / 2), y: value.toFixed(1) };
    series1.push(point1);
}
for (i = 1; i < 50; i++) {
    if (Math.random() > 0.5) {
        value1 += Math.random();
    } else {
        value1 -= Math.random();
    }
    value1 = value1 < 60 ? 60 : value1 > 90 ? 90 : value1;
    point1 = { x: 120 + (i / 2), y: value1.toFixed(1) };
    series2.push(point1);
}

const seriesData1 = series1;
const seriesData2 = series2;
const primaryXAxis = {
    title: 'Height (cm)',
    minimum: 120, maximum: 180,
    edgeLabelPlacement: 'Shift',
    labelFormat: '{value}cm'
};
const primaryYAxis = {
    title: 'Weight (kg)',
    minimum: 60, maximum: 90,
    labelFormat: '{value}kg',
    rangePadding: 'None'
};
const title = 'Height Vs Weight';
const marker = { width: 5, height: 5 };
const marker1 = { width: 3, height: 3 };

provide('chart', [ScatterSeries, Legend]);

</script>
<style>
  #container {
    height: 350px;
  }
</style>