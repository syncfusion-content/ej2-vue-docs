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
        { x: 'Jan', y: -7.1 }, { x: 'Feb', y: -3.7 },
        { x: 'Mar', y: 2 }, { x: 'Apr', y: 6.3 },
        { x: 'May', y: 13.3 }, { x: 'Jun', y: 18.0 },
        { x: 'Jul', y: 19.8 }, { x: 'Aug', y: 18.1 },
        { x: 'Sep', y: 13.1 }, { x: 'Oct', y: 4.1 },
        { x: 'Nov', y: -3.8 }, { x: 'Dec', y: -6.8 }
        ];

const primaryXAxis = {
    valueType: 'Category'
  };

const marker = {
                dataLabel: { visible: true,
                    border:{width: 2, color : 'red'},
                    rx:10, ry: 10
                }
            };

const title = "Alaska Weather Statistics - 2016";

provide('chart',  [ColumnSeries, Category, DataLabel]);

</script>
<style>
#container {
   height: 350px;
 }
</style>