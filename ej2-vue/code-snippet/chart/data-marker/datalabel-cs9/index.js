
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

let total = [];

new Vue({
	el: '#app',
	template: `
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
`,

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

      width: Browser.isDevice ? "100%" : "60%",
      marker: {
        dataLabel: {
          visible: true,
          position: "Top",
          font: { fontWeight: "600", color: "#ffffff" },
        },
      },
      theme: 'Material3',
      tooltip: {
        enable: true,
      },

      title: "Olympic Medal Counts - RIO",
    };
  },
  provide: {
    chart: [ColumnSeries, Legend, DataLabel, Category, Tooltip],
  },
  methods: {
    onSeriesRender: function (args) {
      for (let i = 0; i < args.data.length; i++) {
        if (!total[args.data[i].x]) total[args.data[i].x] = 0;
        total[args.data[i].x] += parseInt(args.data[i].y);
      }
    },
    onTextRender: function (args) {
      let percentage = (parseInt(args.text) / total[args.point.x]) * 100;
      percentage = percentage % 1 === 0 ? percentage : percentage.toFixed(2);
      args.text = percentage + "%";
    },
  },
}
);