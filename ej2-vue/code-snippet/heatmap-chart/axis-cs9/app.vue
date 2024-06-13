<template>
  <div id="app">
    <ejs-heatmap id="heatmap" :titleSettings="titleSettings" :xAxis="xAxis" :yAxis="yAxis"
      :legendSettings="legendSettings" :cellSettings="cellSettings" height="280px" :paletteSettings="paletteSettings"
      :dataSource="dataSource" :tooltipRender="tooltipRender"></ejs-heatmap>
  </div>
</template>
<script>

import { HeatMapComponent, Tooltip, Legend } from "@syncfusion/ej2-vue-heatmap";
import { Internationalization } from "@syncfusion/ej2-base";


export default {
  name: "App",
  components: {
    "ejs-heatmap": HeatMapComponent
  },
  data: function () {
    return {
      dataSource: [
        [null, null, null, null, 16, 48, 0],
        [0, 15, 0, 24, 0, 39, 0],
        [0, 18, 37, 0, 0, 50, 0],
        [0, 10, 0, 0, 44, 5, 0],
        [0, 36, 0, 45, 20, 18, 0],
        [0, 28, 1, 42, 0, 10, 0],
        [0, 16, 32, 0, 1, 25, 0],
        [0, 31, 2, 9, 24, 0, 0],
        [0, 8, 47, 0, 0, 35, 0],
        [0, 31, 0, 0, 0, 40, 0],
        [0, 8, 0, 27, 0, 35, 0],
        [0, 12, 9, 45, 0, 8, 0],
        [0, 0, 13, 0, 22, 10, 0],
        [0, 16, 32, 0, 1, 25, 0],
        [0, 31, 2, 9, 24, 0, 0],
        [0, 8, 47, 27, 0, 35, 0],
        [0, 28, 14, 10, 0, 0, 0],
        [0, 36, 0, 45, 20, 18, 0],
        [0, 28, 1, 42, 0, 10, 0],
        [0, 31, 0, 24, 0, 40, 0],
        [0, 8, 47, 27, 0, 35, 0],
        [0, 36, 0, 45, 20, 18, 0],
        [0, 28, 1, 42, 0, 10, 0],
        [0, 31, 0, 24, 0, 40, 0],
        [0, 16, 32, 0, 1, 25, 0],
        [0, 31, 2, 9, 24, 0, 0],
        [0, 8, 47, 27, 0, 35, 0],
        [0, 10, 0, 36, 23, 19, 0],
        [0, 18, 37, 23, 0, 50, 0],
        [0, 28, 14, 10, 0, 0, 0],
        [0, 18, 37, 23, 0, 50, 0],
        [0, 18, 37, 23, 0, 50, 0],
        [0, 28, 14, 10, 0, 0, 0],
        [0, 31, 2, 9, 24, 0, 0],
        [0, 8, 47, 27, 0, 35, 0],
        [0, 10, 2, 0, 44, 5, 0],
        [0, 36, 0, 45, 20, 18, 0],
        [0, 28, 1, 42, 0, 10, 0],
        [0, 31, 0, 24, 0, 40, 1],
        [0, 16, 32, 0, 1, 25, 0],
        [0, 31, 2, 9, 24, 0, 0],
        [0, 8, 47, 27, 0, 35, 0],
        [0, 10, 2, 0, 44, 5, 0],
        [0, 12, 9, 45, 0, 8, 0],
        [0, 0, 13, 35, 22, 10, 0],
        [0, 28, 14, 10, 0, 0, 0],
        [0, 36, 0, 45, 20, 18, 2],
        [0, 28, 1, 42, 0, 10, 0],
        [0, 31, 0, 24, 0, 40, 1],
        [0, 8, 47, 27, 0, 35, 0],
        [0, 10, 2, 0, 44, 5, 0],
        [0, 31, 2, 9, 24, 0, 1],
        [0, 8, 47, 27, 0, 35, 40],
        [0, 10, 2, 0, 44, 5, null]
      ],
      titleSettings: {
        text: "Annual Summary of User Activities in GitLab",
        textStyle: {
          size: "15px",
          fontWeight: "500",
          fontStyle: "Normal",
          fontFamily: "Segoe UI"
        }
      },
      xAxis: {
        opposedPosition: true,
        valueType: "DateTime",
        minimum: new Date(2017, 6, 23),
        maximum: new Date(2018, 6, 30),
        intervalType: "Days",
        showLabelOn: "Months",
        labelFormat: "MMM",
        increment: 7
      },
      yAxis: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        isInversed: true
      },
      cellSettings: {
        showLabel: false,
        border: {
          color: "white"
        }
      },
      paletteSettings: {
        palette: [
          { value: 0, color: "rgb(238,238,238)", label: "no contributions" },
          {
            value: 1,
            color: "rgb(172, 213, 242)",
            label: "1-15 contributions"
          },
          {
            value: 16,
            color: "rgb(127, 168, 201)",
            label: "16-31 contributions"
          },
          {
            value: 32,
            color: "rgb(82, 123, 160)",
            label: "31-49 contributions"
          },
          { value: 50, color: "rgb(37, 78, 119)", label: "50+ contributions" }
        ],
        type: "Fixed",
        emptyPointColor: "white"
      },
      showTooltip: true,
      legendSettings: {
        position: "Bottom",
        width: "20%",
        alignment: "Near",
        showLabel: true,
        labelDisplayType: "None",
        enableSmartLegend: true
      },
      tooltipRender: function (args) {
        let intl = new Internationalization();
        let format = intl.getDateFormat({ format: "EEE MMM dd, yyyy" });
        let newDate = new Date(args.xValue);
        let date = new Date(newDate.getTime());
        let axisLabel = args.heatmap.axisCollections[1].axisLabels;
        let index = axisLabel.indexOf(args.yLabel);
        date.setDate(date.getDate() + index);
        let value = format(date);
        args.content = [
          (args.value === 0 ? "No" : args.value) +
          " " +
          "contributions" +
          "<br>" +
          value
        ];
      }
    };
  },
  provide: {
    heatmap: [Tooltip, Legend]
  }
};
</script>