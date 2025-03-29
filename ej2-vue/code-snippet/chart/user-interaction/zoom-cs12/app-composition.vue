<template>
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :zoomSettings='zoom'>
            <e-series-collection>
                <e-series :dataSource='seriesData1' type='Area' xName='x' yName='y' name='Product X' opacity=0.3>
                </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, AreaSeries, DateTime, Zoom, ScrollBar } from "@syncfusion/ej2-vue-charts";



let series1 = [];
let point1;
let value = 40;
let i;
for (i = 1; i < 500; i++) {
    if (Math.random() > .5) {
        value += Math.random();
    } else {
        value -= Math.random();
    }
    point1 = { x: new Date(1950, i + 2, i), y: value.toFixed(1) };
    series1.push(point1);
}
const seriesData1 = series1;
const primaryXAxis = {
    valueType: 'DateTime',
    labelFormat: 'yMMM',
    zoomFactor: 0.2, zoomPosition: 0.6,
    scrollbarSettings: {
        enable: true,
        enableZoom: false,
        height: 14,
        trackRadius: 8,
        scrollbarRadius: 8,
        gripColor: 'transparent',
        trackColor: 'yellow',
        scrollbarColor: 'red',
        position: 'Bottom',
    }
},
const primaryYAxis = {
    scrollbarSettings: {
        enable: true,
        enableZoom: false,
        height: 14,
        trackRadius: 8,
        scrollbarRadius: 8,
        gripColor: 'transparent',
        trackColor: 'yellow',
        scrollbarColor: 'red',
        position: 'Right',
    }
}
const zoom =
{
    enableSelectionZooming: true,
    enableScrollbar: true
}
const title = 'Sales History of Product X';

provide('chart', [AreaSeries, DateTime, Zoom, ScrollBar]);

</script>
<style>
#container {
    height: 350px;
}
</style>