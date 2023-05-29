

<template>
  <ejs-chart
    style="display: block"
    :theme="theme"
    align="center"
    id="container"
    :title="title"
    :primaryXAxis="primaryXAxis"
    :primaryYAxis="primaryYAxis"
    :chartArea="chartArea"
    :tooltip="tooltip"
    :legendSettings="legendSettings"
  >
    <e-series-collection>
      <e-series
        :dataSource="seriesData"
        type="Column"
        xName="x"
        yName="y"
        name="Gold"
        width="2"
      >
      </e-series>
      <e-series
        :dataSource="seriesData1"
        type="Column"
        xName="x"
        yName="y"
        name="Silver"
        width="2"
      >
      </e-series>
      <e-series
        :dataSource="seriesData2"
        type="Column"
        xName="x"
        yName="y"
        name="Bronze"
        width="2"
      >
      </e-series>
    </e-series-collection>
  </ejs-chart>
</template>
<style scoped>
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import {
  ChartPlugin,
  ColumnSeries,
  Category,
  DataLabel,
  Tooltip,
  Legend,
} from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default Vue.extend({
  data: function () {
    return {
      seriesData: [
        { x: "USA", y: 46 },
        { x: "GBR", y: 27 },
        { x: "CHN", y: 26 },
      ],

      seriesData1: [
        { x: "USA", y: 37 },
        { x: "GBR", y: 23 },
        { x: "CHN", y: 18 },
      ],

      seriesData2: [
        { x: "USA", y: 38 },
        { x: "GBR", y: 17 },
        { x: "CHN", y: 26 },
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "Category",
        interval: 1,
        majorGridLines: { width: 0 },
      },
      chartArea: { border: { width: 0 } },

      //Initializing Primary Y Axis
      primaryYAxis: {
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { color: "transparent" },
      },
      tooltip: {
        enable: true,
      },
      title: "Olympic Medal Counts - RIO",
      legendSettings: { visible: true, reverse: true },
    };
  },
  provide: {
    chart: [ColumnSeries, Legend, DataLabel, Category, Tooltip],
  },
});
</script>


