
import Vue from "vue";
import { ChartPlugin, SplineRangeAreaSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='SplineRangeArea' xName='x' high='high' low='low' name='England'> </e-series>
                <e-series :dataSource='seriesData1' type='SplineRangeArea' xName='x' high='high' low='low' name='India'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData:[
            { x: 'Jan', high: 14, low: 4 },
            { x: 'Feb', high: 17, low: 7 },
            { x: 'Mar', high: 20, low: 10 },
            { x: 'Apr', high: 22, low: 12 },
            { x: 'May', high: 20, low: 10 },
            { x: 'Jun', high: 17, low: 7 },
            { x: 'Jul', high: 15, low: 5 },
            { x: 'Aug', high: 17, low: 7 },
            { x: 'Sep', high: 20, low: 10 },
            { x: 'Oct', high: 22, low: 12 },
            { x: 'Nov', high: 20, low: 10 },
            { x: 'Dec', high: 17, low: 7 }
        ],
      seriesData1:[
            { x: 'Jan', high: 29, low: 19 },
            { x: 'Feb', high: 32, low: 22 },
            { x: 'Mar', high: 35, low: 25 },
            { x: 'Apr', high: 37, low: 27 },
            { x: 'May', high: 35, low: 25 },
            { x: 'Jun', high: 32, low: 22 },
            { x: 'Jul', high: 30, low: 20 },
            { x: 'Aug', high: 32, low: 22 },
            { x: 'Sep', high: 35, low: 25 },
            { x: 'Oct', high: 37, low: 27 },
            { x: 'Nov', high: 35, low: 25 },
            { x: 'Dec', high: 32, low: 22 }
        ],
        primaryXAxis: {
            valueType: 'Category',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        },
        primaryYAxis: {
            labelFormat: '{value}˚C',
            lineStyle: { width: 0 },
            minimum: 0,
            maximum: 40,
            majorTickLines: { width: 0 }
        },
        title: 'Monthly Temperature Range'
    };
  },
  provide: {
    chart: [SplineRangeAreaSeries, Category]
  },

});