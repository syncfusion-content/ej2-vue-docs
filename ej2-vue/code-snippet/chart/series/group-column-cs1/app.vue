<template>
  <ejs-chart style="display: block" align="center" id="container" :title="title" :primaryXAxis="primaryXAxis"
    :primaryYAxis="primaryYAxis" :chartArea="chartArea" :tooltip="tooltip">
    <e-series-collection>
      <e-series :dataSource="seriesData" type="Column" xName="x" yName="y" name="USA Total" width="2" :marker="marker"
        groupName="USA" columnWidth="0.7" columnSpacing="0.1">
      </e-series>
      <e-series :dataSource="seriesData1" type="Column" xName="x" yName="y" name="USA Gold" width="2" :marker="marker"
        groupName="USA" columnWidth="0.5" columnSpacing="0.1">
      </e-series>
      <e-series :dataSource="seriesData2" type="Column" xName="x" yName="y" name="UK Total" width="2" :marker="marker"
        groupName="UK" columnWidth="0.7" columnSpacing="0.1">
      </e-series>
      <e-series :dataSource="seriesData3" type="Column" xName="x" yName="y" name="UK Gold" width="2" :marker="marker"
        groupName="UK" columnWidth="0.5" columnSpacing="0.1">
      </e-series>
      <e-series :dataSource="seriesData4" type="Column" xName="x" yName="y" name="China Total" width="2"
        :marker="marker" groupName="China" columnWidth="0.7" columnSpacing="0.1">
      </e-series>
      <e-series :dataSource="seriesData5" type="Column" xName="x" yName="y" name="China Gold" width="2" :marker="marker"
        groupName="China" columnWidth="0.5" columnSpacing="0.1">
      </e-series>
    </e-series-collection>
  </ejs-chart>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Category, DataLabel, Tooltip, Legend } from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function () {
    return {
      seriesData: [
        { x: "2012", y: 104 },
        { x: "2016", y: 121 },
        { x: "2020", y: 113 },
      ],

      seriesData1: [
        { x: "2012", y: 46 },
        { x: "2016", y: 46 },
        { x: "2020", y: 39 },
      ],

      seriesData2: [
        { x: "2012", y: 65 },
        { x: "2016", y: 67 },
        { x: "2020", y: 65 },
      ],

      seriesData3: [
        { x: "2012", y: 29 },
        { x: "2016", y: 27 },
        { x: "2020", y: 22 },
      ],

      seriesData4: [
        { x: "2012", y: 91 },
        { x: "2016", y: 70 },
        { x: "2020", y: 88 },
      ],

      seriesData5: [
        { x: "2012", y: 38 },
        { x: "2016", y: 26 },
        { x: "2020", y: 38 },
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

      title: "Olympics Medal Tally",
    };
  },
  provide: {
    chart: [ColumnSeries, Legend, DataLabel, Category, Tooltip],
  },
};
</script>