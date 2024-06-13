<template>
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :zoomSettings='zoom' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Product X'  :marker='marker'> </e-series>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y1' name='Product Y' :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { ChartComponent as EjsChart, ColumnSeries, Category, Tooltip, Zoom, DataLabel,
SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries } from "@syncfusion/ej2-vue-charts";
import { setCurrencyCode } from '@syncfusion/ej2-base';
setCurrencyCode('EUR');

const seriesData = [
          { x: 1900, y: 4, y1: 2.6, y2: 2.8 }, { x: 1920, y: 3.0, y1: 2.8, y2: 2.5 },
          { x: 1940, y: 3.8, y1: 2.6, y2: 2.8 }, { x: 1960, y: 3.4, y1: 3, y2: 3.2 },
          { x: 1980, y: 3.2, y1: 3.6, y2: 2.9 }, { x: 2000, y: 3.9, y1: 3, y2: 2 }
            ];

const primaryXAxis = {
    title: 'Year',
    edgeLabelPlacement: 'Shift'
};

const primaryYAxis = {
   title: 'Sales Amount in Millions',
   labelFormat: 'c'
};

const zoom = {
    enableMouseWheelZooming: true,
    enableDeferredZooming: true,
    enablePinchZooming: true,
    enableSelectionZooming: true
};

const marker = {
    dataLabel: {
        visible: true
    }
};

const tooltip = {
    enable: true, format: '${point.x} : ${point.y}'
};

provide('chart',  [ColumnSeries, Category, Tooltip, Zoom, DataLabel]);

</script>
<style>
 #container {
     height: 350px;
 }
</style>