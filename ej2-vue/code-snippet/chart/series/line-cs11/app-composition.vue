<template>
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :legendSettings='legendSettings' :tooltip='tooltip' :chartArea='chartArea'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Pareto' xName='x' yName='y' name='Defect' width='2'
                    opacity=0.75 columnWidth=0.4 :paretoOptions='paretoOptions' :cornerRadius='cornerRadius'>
                </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, LineSeries, StackingColumnSeries, Tooltip, ColumnSeries, Category, Legend, ParetoSeries, Highlight } from "@syncfusion/ej2-vue-charts";


const seriesData = [
    { x: 'Button Defect', y: 23 }, { x: 'Pocket Defect', y: 16 },
    { x: 'Collar Defect', y: 10 }, { x: 'Cuff Defect', y: 7 },
    { x: 'Sleeve Defect', y: 6 }, { x: 'Other Defect', y: 2 }
];
const primaryXAxis = {
    interval: 1,
    valueType: 'Category',
    majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
    majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
    lineStyle: { width: 0 }, labelIntersectAction: 'Rotate45',
};
const primaryYAxis =
{
    title: 'Frequency of Occurrence',
    minimum: 0,
    maximum: 25,
    interval: 5,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 }, majorGridLines: { width: 1 },
    minorGridLines: { width: 1 }, minorTickLines: { width: 0 }
};
const chartArea = {
    border: {
        width: 0
    }
};
const paretoOptions = {
    marker: { visible: true, isFilled: true, width: 7, height: 7 },
    dashArray: '3,2',
    width: 2,
    fill: '#F7523F'
};
const cornerRadius = { topLeft: Browser.isDevice ? 4 : 6, topRight: Browser.isDevice ? 4 : 6 };
const title = 'Defects in Shirts';
const legendSettings = {
    visible: true,
    enableHighlight: true
};
const tooltip = {
    enable: true,
    shared: true,
    format: '${series.name} : <b>${point.y}</b>'
};

provide('chart', [StackingColumnSeries, LineSeries, Category, ColumnSeries, Legend, Tooltip, ParetoSeries, Highlight]);

</script>
<style>
#container {
    height: 350px;
}
</style>