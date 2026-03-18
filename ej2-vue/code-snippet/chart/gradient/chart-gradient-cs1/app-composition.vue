<template>
  <div id="app">
    <ejs-chart id="container" :title="title" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis"
      :tooltip="tooltip" :legendSettings="legendSettings">
      <e-series-collection>
        <e-series :dataSource="SalesData" type="Column" xName="Month" yName="Amount" name="Sales"
          :linearGradient="linearGradient" :marker="marker">
        </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries, Category, Legend, Tooltip, DataLabel, Marker } from "@syncfusion/ej2-vue-charts";

const SalesData = [
  { Month: 'Jan', Amount: 78 },
  { Month: 'Feb', Amount: 88 },
  { Month: 'Mar', Amount: 99 },
  { Month: 'Apr', Amount: 92 },
  { Month: 'May', Amount: 95 },
  { Month: 'Jun', Amount: 102 },
  { Month: 'Jul', Amount: 110 },
  { Month: 'Aug', Amount: 105 }
];

const primaryXAxis = {
  valueType: 'Category'
};

const primaryYAxis = {
  labelFormat: '${value}k'
};

const linearGradient = {
  x1: 0, y1: 0,
  x2: 0, y2: 1,
  gradientColorStop: [
    { color: '#4F46E5', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
    { color: '#22D3EE', offset: 100, opacity: 0.95, lighten: 0, brighten: 0.9 }
  ]
};

const marker = { visible: true, isFilled: true, dataLabel: { visible: true } };

const tooltip = { enable: true };

const legendSettings = { visible: true };

const title = 'Monthly Sales Performance';

provide('chart', [ColumnSeries, Category, Legend, Tooltip, DataLabel, Marker]);

</script>

<style>
#container {
  height: 400px;
}
</style>
