<template>
  <div id="app">
    <ejs-button id='print' @click='print'>Print</ejs-button>
    <ejs-chart ref="chart" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' style="float: left">
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Polar' xName='x' yName='y' drawType='Area'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, PolarSeries, Category, AreaSeries } from "@syncfusion/ej2-vue-charts";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

const chart = ref(null);
const seriesData = [
  { x: 'Jan', y: -1 }, { x: 'Feb', y: -1 }, { x: 'Mar', y: 2 },
  { x: 'Apr', y: 8 }, { x: 'May', y: 13 }, { x: 'Jun', y: 18 },
  { x: 'Jul', y: 21 }, { x: 'Aug', y: 20 }, { x: 'Sep', y: 16 },
  { x: 'Oct', y: 10 }, { x: 'Nov', y: 4 }, { x: 'Dec', y: 0 }
];
const primaryXAxis = {
  valueType: 'Category'
};
const primaryYAxis = {
  minimum: -5, maximum: 35, interval: 10,
  title: 'Temperature in Celsius',
  labelFormat: '{value}C'
};
const title = "Climate Graph-2012";

provide('chart', [PolarSeries, Category, AreaSeries]);

const print = () => {
  chart.value.print();
}

</script>