import Vue from "vue";
import { ChartPlugin, CandleSeries, DateTime, Legend, Tooltip, Ema } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-chart id="container" :title="title" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis"
          :tooltip="tooltip" :legendSettings="legendSettings" :indicators="indicators">
          <e-series-collection>
            <e-series :dataSource="PriceSeries" type="Candle" xName="Date" yName="Close" low="Low" high="High" 
              close="Close" open="Open" volume="Volume" name="Equity Price" :width="2">
            </e-series>
          </e-series-collection>
        </ejs-chart>
    </div>
`,

  data: function() {
    return {
      PriceSeries: [
        { Date: new Date(2025, 0, 1), Open: 103.9, High: 106.8, Low: 102.5, Close: 105.6, Volume: 182540000 },
        { Date: new Date(2025, 1, 1), Open: 105.2, High: 108.1, Low: 103.4, Close: 106.9, Volume: 176310000 },
        { Date: new Date(2025, 2, 1), Open: 106.7, High: 110.6, Low: 105.1, Close: 108.7, Volume: 189250000 },
        { Date: new Date(2025, 3, 1), Open: 108.9, High: 110.9, Low: 106.8, Close: 107.6, Volume: 171900000 },
        { Date: new Date(2025, 4, 1), Open: 107.8, High: 112.3, Low: 106.9, Close: 111.4, Volume: 196700000 },
        { Date: new Date(2025, 5, 1), Open: 111.2, High: 114.9, Low: 110.0, Close: 113.6, Volume: 205600000 },
        { Date: new Date(2025, 6, 1), Open: 113.5, High: 117.3, Low: 112.2, Close: 116.0, Volume: 213400000 },
        { Date: new Date(2025, 7, 1), Open: 116.1, High: 119.2, Low: 114.6, Close: 118.1, Volume: 221900000 },
        { Date: new Date(2025, 8, 1), Open: 117.9, High: 120.7, Low: 116.0, Close: 116.8, Volume: 198300000 },
        { Date: new Date(2025, 9, 1), Open: 116.7, High: 121.6, Low: 116.1, Close: 119.9, Volume: 234600000 },
        { Date: new Date(2025, 10, 1), Open: 120.2, High: 123.9, Low: 118.8, Close: 122.5, Volume: 226100000 }
      ],
      primaryXAxis: {
        title: 'Months',
        valueType: 'DateTime',
        intervalType: 'Months',
        labelFormat: 'MMM yyyy',
        edgeLabelPlacement: 'Shift',
        majorGridLines: {
          width: 0
        }
      },
      primaryYAxis: {
        title: 'Price (USD)',
        labelFormat: '${value}',
        minimum: 90,
        maximum: 130,
        interval: 10,
        lineStyle: {
          width: 0
        },
        majorTickLines: {
          width: 0
        }
      },
      indicators: [
        {
          type: 'Ema',
          field: 'Close',
          seriesName: 'Equity Price',
          xName: 'Date',
          width: 2,
          period: 3,
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
      tooltip: {
        enable: true
      },
      legendSettings: {
        visible: false
      },
      title: 'Equity Price - Jan-Nov 2025'
    };
  },
  provide: {
    chart: [CandleSeries, DateTime, Legend, Tooltip, Ema]
  }

});
