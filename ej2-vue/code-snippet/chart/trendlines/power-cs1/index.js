
import Vue from "vue";
import { ChartPlugin, ScatterSeries, SplineSeries, Trendlines, LineSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Scatter' xName='x' yName='y'>
                  <e-trendlines>
                        <e-trendline :type='type'>
                        </e-trendline>
                    </e-trendlines>
                </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
        seriesData: [
        { x: 1, y: 10 }, { x: 2, y: 50 },{ x: 3, y: 80 }, { x: 4, y: 110 },
        { x: 5, y: 180 }, { x: 6, y: 220 }, { x: 7, y: 300 }, { x: 8, y: 370 }, { x: 9, y: 490 }, { x: 10, y: 500 }
        ],
        primaryXAxis: {
        title: 'Months',
        },
        primaryYAxis: {
        title: 'Rupees against Dollars',
        interval: 100
        },
        type: 'Power',
        title: 'Historical Indian Rupee Rate (INR USD)'
    };
  },
  provide: {
    chart: [ScatterSeries, SplineSeries, Trendlines, LineSeries]
  }

});