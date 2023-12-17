
import Vue from "vue";
import {  ChartPlugin,
  ColumnSeries,
  Category,
  DataLabel,
  Tooltip,
  Legend } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);
let count = 0;
let datasource1 = [
  { x: 'Egg', y: 206 },
  { x: 'Fish', y: 123 },
  { x: 'Misc', y: 48 },
  { x: 'Tea', y: 240 },
  { x: 'Fruit', y: 170 }
];
let datasource2 = [
 { x: 'Egg', y: 86 },
 { x: 'Fish', y: 173 },
 { x: 'Misc', y: 188 },
 { x: 'Tea', y: 109 },
 { x: 'Fruit', y: 100 }

];
let datasource3 = [
  { x: 'Egg', y: 156 },
  { x: 'Fish', y: 33 },
  { x: 'Misc', y: 260 },
  { x: 'Tea', y: 200 },
 { x: 'Fruit', y: 30 }

];
;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-chart id="container" ref="chart" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip' :chartArea='chartArea'
         :legendSettings='legendSettings' :loaded='loaded'>
            <e-series-collection>
                <e-series :dataSource='seriesData' :marker='marker' type='Column' xName='x' yName='y' name='Tiger' width='1' :cornerRadius="cornerRadius"> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
                    { x: 'Egg', y: 106 },
                    { x: "Fish", y: 103 },
                    { x: "Misc", y: 198 },
                    { x: "Tea", y: 189 },
                    { x: "Fruit", y: 250 }
              ],
        primaryXAxis: {
              valueType: "Category",
              interval: 1,
              majorGridLines: { width: 0 },
              tickPosition: "Inside",
              labelPosition: "Inside",
              labelStyle: { color: "#ffffff" }
        },
          primaryYAxis: {
            minimum: 0,
            maximum: 300,
            interval: 50,
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            labelStyle: { color: "transparent" }
        },
          legendSettings: { visible: false },
          tooltip: {
            enable: false
        },
        cornerRadius: {
          bottomLeft: 10,
          bottomRight: 10,
          topLeft: 10,
          topRight: 10
        },
        marker: {
        dataLabel: {
          visible: true,
          position: "Top",
        }
        },
         chartArea: { border: { width: 0 } },
        title: "Trade in Food Groups"
    };
  },
  provide: {
    chart: [ColumnSeries, Legend, DataLabel, Category, Tooltip]
  },
  methods: {
     loaded: function(args) {
      this.$refs.chart.ej2Instances.loaded = null;
      let columninterval = setInterval(() => {
        if (document.getElementById('container')) {
        if (count === 0) {
          this.$refs.chart.ej2Instances.series[0].dataSource = datasource1;
          this.$refs.chart.ej2Instances.animate();
          count++;
        } else if (count === 1) {
          this.$refs.chart.ej2Instances.series[0].dataSource = datasource2;
          this.$refs.chart.ej2Instances.animate();
          count++;
        } else if (count === 2) {
          this.$refs.chart.ej2Instances.series[0].dataSource = datasource3;
          this.$refs.chart.ej2Instances.animate();
          count = 0;
        }
        } else {
          clearInterval(columninterval)
        }
      }, 2000);
    }
  }

});