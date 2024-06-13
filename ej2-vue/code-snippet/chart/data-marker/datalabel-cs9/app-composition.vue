<template>
  <div class="control-section">
    <div align="center">
      <ejs-chart
        style="display: block"
        :theme="theme"
        align="center"
        id="chartcontainer"
        :title="title"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :width="width"
        :tooltip="tooltip"
        :textRender="onTextRender"
        :seriesRender="onSeriesRender"
      >
        <e-series-collection>
          <e-series
            :dataSource="seriesData"
            type="Column"
            xName="x"
            yName="y"
            name="Gold"
            width="2"
            :marker="marker"
          >
          </e-series>
          <e-series
            :dataSource="seriesData1"
            type="Column"
            xName="x"
            yName="y"
            name="Silver"
            width="2"
            :marker="marker"
          >
          </e-series>
          <e-series
            :dataSource="seriesData2"
            type="Column"
            xName="x"
            yName="y"
            name="Bronze"
            width="2"
            :marker="marker"
          >
          </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
  </div>
</template>
<style scoped>
</style>
<script setup>
import { provide } from "vue";

import { Browser } from "@syncfusion/ej2-base";
import {
  ChartComponent as EjsChart,
  ColumnSeries,
  Category,
  DataLabel,
  Tooltip,
  Legend,
  SeriesCollectionDirective as ESeriesCollection,
  SeriesDirective as ESeries,
} from "@syncfusion/ej2-vue-charts";

let total = [];

const seriesData = [
  { x: "USA", y: 46 },
  { x: "GBR", y: 27 },
  { x: "CHN", y: 26 },
];

const seriesData1 = [
  { x: "USA", y: 37 },
  { x: "GBR", y: 23 },
  { x: "CHN", y: 18 },
];

const seriesData2 = [
  { x: "USA", y: 38 },
  { x: "GBR", y: 17 },
  { x: "CHN", y: 26 },
];

//Initializing Primary X Axis
const primaryXAxis = {
  valueType: "Category",
  interval: 1,
  majorGridLines: { width: 0 },
};

const chartArea = { border: { width: 0 } };

//Initializing Primary Y Axis

const primaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: "transparent" },
};

const width = Browser.isDevice ? "100%" : "60%";

const marker = {
  dataLabel: {
    visible: true,
    position: "Top",
    font: { fontWeight: "600", color: "#ffffff" },
  },
};

const tooltip = {
  enable: true,
};

const title = "Olympic Medal Counts - RIO";

provide("chart", [ColumnSeries, Legend, DataLabel, Category, Tooltip]);

const onSeriesRender = function (args) {
  for (let i = 0; i < args.data.length; i++) {
    if (!total[args.data[i].x]) total[args.data[i].x] = 0;
    total[args.data[i].x] += parseInt(args.data[i].y);
  }
};

const onTextRender = function (args) {
  let percentage = (parseInt(args.text) / total[args.point.x]) * 100;
  percentage = percentage % 1 === 0 ? percentage : percentage.toFixed(2);
  args.text = percentage + "%";
};

</script>