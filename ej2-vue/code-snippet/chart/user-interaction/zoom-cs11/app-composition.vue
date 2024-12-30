<template>
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :zoomSettings='zoom' :legendSettings='legendSettings' :chartArea='chartArea'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Area' xName='x' yName='y' name='Product X' :border='border' :animation='animation'>
                </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, AreaSeries, DateTime, Zoom, Legend } from "@syncfusion/ej2-vue-charts";

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

const seriesData = series1;
const primaryXAxis = {
    title: 'Years',
    valueType: 'DateTime',
    labelFormat: 'yMMM',
    edgeLabelPlacement: 'Shift',
    majorGridLines : { width : 0 }
};
const primaryYAxis = {
    title: 'Profit ($)',
    rangePadding: 'None',
    lineStyle : { width: 0 },
    majorTickLines : {width : 0}
};
const zoom = {
    enableSelectionZooming: true,
    toolbarItems: ['Zoom', 'Pan', 'Reset'],
    showToolbar: true,
    toolbarPosition: {
        y: -10,
        draggable: true,
        horizontalAlignment: "Far",
        verticalAlignment: "Top"
    }
};
const title = 'Sales History of Product X';
const legendSettings = { visible: false };
const chartArea = { border: { width: 0 } };
const border = { width: 0.5, color: '#00bdae' };
const animation = { enable: false };

provide('chart', [AreaSeries, DateTime, Zoom, Legend]);

</script>
<style>
  #container {
    height: 350px;
  }
</style>