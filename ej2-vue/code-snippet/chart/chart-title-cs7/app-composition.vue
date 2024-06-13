<template>
    <div id="app">
         <ejs-chart  id="container" :title='title' :primaryXAxis='primaryXAxis' :titleStyle='titleStyle'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='month' yName='sales' name='Gold'
                :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { ChartComponent as EjsChart, LineSeries, Category,
SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries
 } from "@syncfusion/ej2-vue-charts";

const seriesData = [
      { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
           ];

const primaryXAxis = {
    valueType: 'Category',
};

const title = "Unemployment Rates 1975-2010";

const marker = {
    visible: true, width: 10, height: 10
};

const titleStyle = {
    size:'18px', color:'Red', textAlignment: 'Far', textOverflow: 'Wrap'
};

provide('chart',  [LineSeries, Category]);

</script>
<style>
 #container {
   height: 350px;
 }
</style>