<template>
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :zoomSettings='zoom'
            :legendSettings='legend'>
            <e-series-collection>
                <e-series :dataSource='seriesData1' type='Area' xName='x' yName='y' name='Product X' :border='border'
                    :animation='animation' opacity=0.3> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, AreaSeries, DateTime, Zoom } from "@syncfusion/ej2-vue-charts";



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
    labelFormat: 'yMMM'
};
const zoom =
{
    enableMouseWheelZooming: true,
    enablePinchZooming: true,
    enableSelectionZooming: true
};
const title = 'Sales History of Product X';
const legend = { visible: false };
const border = { width: 0.5, color: '#00bdae' };
const animation = { enable: false };

provide('chart', [AreaSeries, DateTime, Zoom]);

</script>
<style>
#container {
    height: 350px;
}
</style>