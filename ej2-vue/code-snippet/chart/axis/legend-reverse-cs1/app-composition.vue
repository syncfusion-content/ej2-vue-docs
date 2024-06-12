<template>
  <ejs-chart style="display: block" :theme="theme" align="center" id="container" :title="title"
    :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :chartArea="chartArea" :tooltip="tooltip"
    :legendSettings="legendSettings">
    <e-series-collection>
      <e-series :dataSource="seriesData" type="Column" xName="x" yName="y" name="Gold" width="2">
      </e-series>
      <e-series :dataSource="seriesData1" type="Column" xName="x" yName="y" name="Silver" width="2">
      </e-series>
      <e-series :dataSource="seriesData2" type="Column" xName="x" yName="y" name="Bronze" width="2">
      </e-series>
    </e-series-collection>
  </ejs-chart>
</template>
<style scoped></style>
<script setup>
import { provide } from "vue";
import {
  ChartComponent as EjsChart,
  SeriesCollectionDirective as ESeriesCollection,
  SeriesDirective as ESeries,
  ColumnSeries,
  Category,
  DataLabel,
  Tooltip,
  Legend,
} from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: "USA", y: 46 },
  { x: "GBR", y: 27 },
  { x: "CHN", y: 26 }
];
const seriesData1 = [
  { x: "USA", y: 37 },
  { x: "GBR", y: 23 },
  { x: "CHN", y: 18 }
];
const seriesData2 = [
  { x: "USA", y: 38 },
  { x: "GBR", y: 17 },
  { x: "CHN", y: 26 }
];
//Initializing Primary X Axis
const primaryXAxis = {
  valueType: "Category",
  interval: 1,
  majorGridLines: { width: 0 }
};
const chartArea = { border: { width: 0 } };
//Initializing Primary Y Axis
const primaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: "transparent" }
};
const tooltip = {
  enable: true
};
const title = "Olympic Medal Counts - RIO";
const legendSettings = { visible: true, reverse: true };

provide('chart', [ColumnSeries, Legend, DataLabel, Category, Tooltip]);
</script>