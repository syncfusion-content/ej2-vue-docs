import Vue from "vue";
import { ChartPlugin, SplineSeries, Category, Legend, Marker, Trendlines, LineSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-chart id="container" :title="title" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis"
          :legendSettings="legendSettings">
          <e-series-collection>
            <e-series :dataSource="OrdersData" type="Spline" xName="Month" yName="Orders" name="Orders"
              :marker="marker" :trendlines="trendlines">
            </e-series>
          </e-series-collection>
        </ejs-chart>
    </div>
`,

  data: function() {
    return {
      OrdersData: [
        { Month: "Jan", Orders: 24 },
        { Month: "Feb", Orders: 30 },
        { Month: "Mar", Orders: 27 },
        { Month: "Apr", Orders: 34 },
        { Month: "May", Orders: 41 },
        { Month: "Jun", Orders: 37 },
        { Month: "Jul", Orders: 49 },
        { Month: "Aug", Orders: 45 },
        { Month: "Sep", Orders: 39 },
        { Month: "Oct", Orders: 46 },
        { Month: "Nov", Orders: 54 },
        { Month: "Dec", Orders: 52 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        majorGridLines: {
          width: 0
        }
      },
      primaryYAxis: {
        lineStyle: {
          width: 0
        },
        majorTickLines: {
          width: 0
        }
      },
      marker: {
        visible: true
      },
      trendlines: [
        {
          type: 'Linear',
          width: 3,
          name: 'Trend',
          radialGradient : {
              cx: 0.5, cy: 0.5,
              fx: 0.5, fy: 0.5, r: 0.5,
              gradientColorStop: [
              { color: '#FFFF00', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
              { color: '#7C3AED', offset: 100, opacity: 0.95, lighten: 0, brighten: 0.9 }
           ]
          }
        }
      ],
      legendSettings: {
        visible: true
      },
      title: 'Retail Orders Processed'
    };
  },
  provide: {
    chart: [SplineSeries, Category, Legend, Marker, Trendlines, LineSeries]
  }

});
