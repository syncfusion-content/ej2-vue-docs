import Vue from "vue";
import { ChartPlugin, LineSeries, DataLabel, Tooltip } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-chart ref="chart" id="container" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :title='title' :chartArea='chartArea' :axisRangeCalculated='axisRangeCalculated' :chartMouseClick='chartMouseClick'>
          <e-series-collection>
            <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' width=3 :marker='marker'></e-series>
          </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 20, y: 20 }, 
        { x: 80, y: 80 }
      ],
      primaryXAxis: {
        edgeLabelPlacement: 'Shift', 
        rangePadding: 'Additional', 
        majorGridLines: { width: 0 }
      },
      primaryYAxis:
      {
        title: 'Value', 
        interval: 20, 
        lineStyle: { width: 0 }, 
        majorTickLines: { width: 0 }
      },
      marker: { 
        visible: true, 
        isFilled: true, 
        border: { 
          width: 2, 
          color: 'White' 
        }, 
        width: 13, 
        height: 13 
      },
      title: 'User supplied data',
      chartArea: {
        border: {
          width: 0
        }
      }
    };
  },
  provide: {
    chart: [LineSeries, DataLabel, Tooltip]
  },
  methods: {
    chartMouseClick: function(args) {
      let isRemoved = false;
      if (args.axisData) {
          for (let i = 0; i < this.$refs.chart.ej2Instances.series[0].points.length; i++) {
              let markerWidth = this.$refs.chart.ej2Instances.series[0].marker.width / 2;
              let roundedX = Math.round(args.axisData['primaryXAxis']) + markerWidth;
              let roundedY = Math.round(args.axisData['primaryYAxis']) + markerWidth;
              let pointX = Math.round(this.$refs.chart.ej2Instances.series[0].points[i].x) + markerWidth;
              let pointY = Math.round(this.$refs.chart.ej2Instances.series[0].points[i].y) + markerWidth;
              if ((roundedX === pointX || roundedX + 1 === pointX || roundedX - 1 === pointX) &&
                  (roundedY === pointY || roundedY + 1 === pointY || roundedY - 1 === pointY)) {
                  if (this.$refs.chart.ej2Instances.series[0].points.length > 1) {
                      const points = this.$refs.chart.ej2Instances.series[0].points;
                      const duration = i === 0 || i === points[points.length - 1].index ? 500 : 0;
                      this.$refs.chart.ej2Instances.series[0].removePoint(i, duration);
                  }
                  isRemoved = true;
              }
          }
          if (!isRemoved) {
                  this.$refs.chart.ej2Instances.series[0].addPoint({ x: Math.round(args.axisData['primaryXAxis']), y: Math.round(args.axisData['primaryYAxis']) });
          }
      }
    },
    axisRangeCalculated: function(args) {
      if (args.axis.name === 'primaryXAxis') {
          if (args.interval < 10) {
              args.maximum = args.maximum + 10;
              args.minimum = args.minimum - 10;
              args.interval = 10;
          }
      }
      if (args.axis.name === 'primaryYAxis') {
          if (args.maximum <= 60) {
              args.interval = 10;
          }
      }
    }
  }
});