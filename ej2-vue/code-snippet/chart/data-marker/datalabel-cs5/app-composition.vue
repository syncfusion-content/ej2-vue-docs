<template>
    <div id="app">
         <ejs-chart id= "container" :title='title' :primaryXAxis='primaryXAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Warmest' :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { ChartComponent as EjsChart, ColumnSeries, Category, DataLabel,
  SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries
 } from "@syncfusion/ej2-vue-charts";

const seriesData = [
        { x: 'Jan', y: 12, text: 'January : 12°C' }, { x: 'Feb', y: 8, text: 'February : 8°C' },
        { x: 'Mar', y: 11, text: 'March : 11°C' }, { x: 'Apr', y: 6, text: 'April : 6°C' }
        ];

const primaryXAxis = {
    valueType: 'Category'
  };

const marker = {
                dataLabel: { visible: true, name: 'text' }
            };

const title = "Alaska Weather Statistics - 2016";

provide('chart',  [ColumnSeries, Category, DataLabel]);

</script>
<style>
 #container {
   height: 350px;
 }
</style>