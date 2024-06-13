<template>
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='month' yName='sales' name='Sales' :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesDirective as ESeries, SeriesCollectionDirective as ESeriesCollection, LineSeries, Category, DataLabel, Tooltip } from "@syncfusion/ej2-vue-charts";

const seriesData = [
      { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
        ];

const primaryXAxis = { valueType: 'Category' };

const primaryYAxis = { labelFormat: '${value}K' };

const marker = {
  dataLabel:{
        visible: true
  }
};

const tooltip = { enable: true };

const title = "Sales Analysis";

provide('chart',  [LineSeries, Category, DataLabel, Tooltip]);

</script>
<style>
 #container {
   height: 350px;
 }
</style>