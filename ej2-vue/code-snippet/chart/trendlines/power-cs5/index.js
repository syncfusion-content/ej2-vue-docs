
import Vue from "vue";
import { ChartPlugin, ScatterSeries, Trendlines, LineSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

let series1 = [];
let yValue = [7.66, 8.03, 8.41, 8.97, 8.77, 8.20, 8.16, 7.89, 8.68, 9.48, 10.11, 11.36, 12.34, 12.60, 12.95,
    13.91, 16.21, 17.50, 22.72, 28.14, 31.26, 31.39, 32.43, 35.52, 36.36,
    41.33, 43.12, 45.00, 47.23, 48.62, 46.60, 45.28, 44.01, 45.17, 41.20, 43.41, 48.32, 45.65, 46.61, 53.34, 58.53];
let point1; let i; let j = 0;
for (i = 1973; i <= 2013; i++) {
    point1 = { x: i, y: yValue[j] };
    series1.push(point1); j++;
}

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Scatter' xName='x' yName='y'>
                 <e-trendlines>
                        <e-trendline :type='type' :backwardForecast='backwardForecast'>
                        </e-trendline>
                    </e-trendlines>
                </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
        seriesData: series1,
        primaryXAxis: {
        title: 'Months',
        },
        primaryYAxis: {
        title: 'Rupees against Dollars',
        interval: 5
        },
        backwardForecast:5,
        type: 'MovingAverage',
        title: 'Historical Indian Rupee Rate (INR USD)'
    };
  },
  provide: {
    chart: [ScatterSeries, Trendlines, LineSeries]
  }

});