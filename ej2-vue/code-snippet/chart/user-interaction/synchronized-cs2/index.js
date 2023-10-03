
import Vue from "vue";
import { ChartPlugin, AreaSeries, SplineSeries, DateTime, Tooltip } from "@syncfusion/ej2-vue-charts";
import { synchronizedData } from 'dataSource.js';
import { Browser } from '@syncfusion/ej2-base';

Vue.use(ChartPlugin);

new Vue({
  el: '#app',
  template: `
    <div class="control-section">
      <div class="chart-row">
        <div class="col" id="container1">
          <ejs-chart style='display:block' align='center' id='chartcontainer1' :title='title1'
              :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis1' :crosshair='crosshair' :titleStyle='titleStyle' 
              :chartMouseLeave='chartMouseLeave1' :chartMouseMove='chartMouseMove1' :chartMouseUp='chartMouseUp1' ref="chart1">
              <e-series-collection>
                  <e-series :dataSource='seriesData' type='Spline' xName='USD' yName='EUR' width = 2
                      :emptyPointSetting='emptyPointSettings'> </e-series>
              </e-series-collection>
          </ejs-chart>
        </div>
        <div class="col" id="container2">
          <ejs-chart style='display:block' align='center' id='chartcontainer2' :title='title2'
              :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis2' :crosshair='crosshair' :titleStyle='titleStyle'
              :chartMouseLeave='chartMouseLeave2' :chartMouseMove='chartMouseMove2' :chartMouseUp='chartMouseUp2' ref="chart2">
              <e-series-collection>
                  <e-series :dataSource='seriesData' type='Area' xName='USD' yName='INR' opacity=0.6
                      :border='border'>
                  </e-series>
              </e-series-collection>
          </ejs-chart>
        </div>
      </div>
    </div>
`,

  data() {
    return {
      seriesData: synchronizedData,
      primaryXAxis: {
        minimum: new Date(2023, 1, 18),
        maximum: new Date(2023, 7, 18),
        valueType: 'DateTime',
        labelFormat: 'MMM d',
        lineStyle: { width: 0 },
        majorGridLines: { width: 0 },
        interval: Browser.isDevice ? 2 : 1,
        edgeLabelPlacement: Browser.isDevice ? 'None' : 'Shift',
        labelRotation: Browser.isDevice ? -45 : 0
      },
      primaryYAxis1: {
        labelFormat: 'n2',
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        minimum: 0.86,
        maximum: 0.96,
        interval: 0.025
      },
      primaryYAxis2: {
        labelFormat: 'n1',
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        minimum: 79,
        maximum: 85,
        interval: 1.5
      },
      border: { width: 2 },
      crosshair: { enable: true, lineType: 'Vertical', dashArray: '2,2' },
      emptyPointSettings: { mode: 'Drop' },
      titleStyle: { textAlignment: 'Near' },
      border: { width: 2 },
      title1: "US to EURO",
      title2: "US to INR"
    };
  },
  provide: {
    chart: [AreaSeries, SplineSeries, DateTime, Tooltip]
  },
  methods: {
    chartMouseLeave1: function (args) {
      this.$refs.chart2.ej2Instances.hideCrosshair();
    },
    chartMouseUp1: function (args) {
      if (Browser.isDevice || this.$refs.chart1.ej2Instances.startMove) {
        this.$refs.chart2.ej2Instances.hideCrosshair();
      }
    },
    chartMouseMove1: function (args) {
      if ((!Browser.isDevice && !this.$refs.chart1.ej2Instances.isTouch && !this.$refs.chart1.ej2Instances.isChartDrag) || this.$refs.chart1.ej2Instances.startMove) {
        this.$refs.chart2.ej2Instances.startMove = this.$refs.chart1.ej2Instances.startMove;
        this.$refs.chart2.ej2Instances.showCrosshair(args.x, args.y);
      }
    },
    chartMouseMove2: function (args) {
      if ((!Browser.isDevice && !this.$refs.chart2.ej2Instances.isTouch && !this.$refs.chart2.ej2Instances.isChartDrag) || this.$refs.chart2.ej2Instances.startMove) {
        this.$refs.chart1.ej2Instances.startMove = this.$refs.chart2.ej2Instances.startMove;
        this.$refs.chart1.ej2Instances.showCrosshair(args.x, args.y);
      }
    },
    chartMouseLeave2: function (args) {
      this.$refs.chart1.ej2Instances.hideCrosshair();
    },
    chartMouseUp2: function (args) {
      if (Browser.isDevice || this.$refs.chart2.ej2Instances.startMove) {
        this.$refs.chart1.ej2Instances.hideCrosshair();
      }
    }
  }

});