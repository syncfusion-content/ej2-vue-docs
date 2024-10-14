import Vue from "vue";
import { ChartPlugin, PolarSeries, SplineSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Polar' xName='x' yName='y' drawType='Spline' width=2> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'Jan', y: -1 }, { x: 'Feb', y: -1 },
        { x: 'Mar', y: 2 },  { x: 'Apr', y: 8 },
        { x: 'May', y: 13 }, { x: 'Jun', y: 18 },
        { x: 'Jul', y: 21 }, { x: 'Aug', y: 20 },
        { x: 'Sep', y: 16 }, { x: 'Oct', y: 10 },
        { x: 'Nov', y: 4 },  { x: 'Dec', y: 0 }
      ],
      primaryXAxis: {
        title: 'Month',
        valueType: 'Category'
      },
      primaryYAxis: {
        minimum: -5, maximum: 25, interval: 5,
        title: 'Temperature in Celsius',
        labelFormat: '{value}°C'
      },
      title: "Climate Graph - 2012"
    };
  },
  provide: {
    chart: [PolarSeries, SplineSeries, Category]
  }

});