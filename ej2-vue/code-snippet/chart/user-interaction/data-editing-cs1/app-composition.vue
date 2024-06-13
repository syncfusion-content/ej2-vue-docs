<template>
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis="primaryYAxis"
            :legendSettings='legend' :chartArea="chartArea">
            <e-series-collection>
                <e-series :dataSource='columnData' type='Column' xName='x' yName='y' name='Product A' :marker="marker"
                    :dragSettings="dragSettings"> </e-series>
                <e-series :dataSource='lineData' type='Line' xName='x' yName='y' name='Product B' :marker="marker"
                    :dragSettings="dragSettings"> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, LineSeries, ColumnSeries, DateTime, Tooltip, Legend, DataEditing } from "@syncfusion/ej2-vue-charts";



const columnData = [
    { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 }, { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 }
];
const lineData = [
    { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 }, { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 }
];
const primaryXAxis = {
    valueType: 'DateTime',
    labelFormat: 'y',
    intervalType: 'Years',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 }
};
const primaryYAxis =
{
    labelFormat: '{value}%',
    rangePadding: 'None',
    minimum: 0,
    maximum: 100,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 }
};
const chartArea = {
    border: {
        width: 0
    }
};
const title = 'Sales History of Product X';
const legend = { visible: false };
const marker = {
    visible: true, width: 10, height: 10
};
const dragSettings = {
    enable: true
};

provide('chart', [LineSeries, ColumnSeries, DateTime, Tooltip, Legend, DataEditing]);

</script>
<style>
#container {
    height: 350px;
}
</style>