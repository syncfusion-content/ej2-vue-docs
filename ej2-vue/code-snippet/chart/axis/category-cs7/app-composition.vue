<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :axes='axes'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Germany'> </e-series>
        <e-series :dataSource='seriesData' type='Line' xName='x' yName='y1' yAxisName='yAxis' name='Japan'
          :marker='marker'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 'Jan', y: 15, y1: 33 }, { x: 'Feb', y: 20, y1: 31 }, { x: 'Mar', y: 35, y1: 30 },
  { x: 'Apr', y: 40, y1: 28 }, { x: 'May', y: 80, y1: 29 }, { x: 'Jun', y: 70, y1: 30 },
  { x: 'Jul', y: 65, y1: 33 }, { x: 'Aug', y: 55, y1: 32 }, { x: 'Sep', y: 50, y1: 34 },
  { x: 'Oct', y: 30, y1: 32 }, { x: 'Nov', y: 35, y1: 32 }, { x: 'Dec', y: 35, y1: 31 }
];
const primaryXAxis = {
  valueType: 'Category'
};
const axes =
  [
    {
      majorGridLines: { width: 0 },
      rowIndex: 1, opposedPosition: true,
      lineStyle: { width: 0 },
      minimum: 24, maximum: 36, interval: 4,
      name: 'yAxis', title: 'Temperature (Celsius)',
      labelFormat: '{value}°C'
    }
  ];
const marker = { visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' } };
const title = "Weather Condition";

provide('chart', [ColumnSeries, Category]);
</script>
<style>
#container {
  height: 350px;
}
</style>