import Vue from "vue";
import { ChartPlugin, SplineRangeAreaSeries, Category, Legend } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='SplineRangeArea' xName='x' high='high' low='low' name='England' dashArray='5,5' :border='border'>
                </e-series>
                <e-series :dataSource='seriesData' type='SplineRangeArea' xName='x' high='high1' low='low1' name='India' dashArray='5,5' :border='border1'>
                </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'Jan', high: 14, low: 4,  high1: 29, low1: 19 },
        { x: 'Feb', high: 17, low: 7,  high1: 32, low1: 22 },
        { x: 'Mar', high: 20, low: 10, high1: 35, low1: 25 },
        { x: 'Apr', high: 22, low: 12, high1: 37, low1: 27 },
        { x: 'May', high: 20, low: 10, high1: 35, low1: 25 },
        { x: 'Jun', high: 17, low: 7,  high1: 32, low1: 22 },
        { x: 'Jul', high: 15, low: 5,  high1: 30, low1: 20 },
        { x: 'Aug', high: 17, low: 7,  high1: 32, low1: 22 },
        { x: 'Sep', high: 20, low: 10, high1: 35, low1: 25 },
        { x: 'Oct', high: 22, low: 12, high1: 37, low1: 27 },
        { x: 'Nov', high: 20, low: 10, high1: 35, low1: 25 },
        { x: 'Dec', high: 17, low: 7,  high1: 32, low1: 22 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        title: 'Month',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
      },
      primaryYAxis: {
        title: 'Temperature',
        labelFormat: '{value}˚C',
        lineStyle: { width: 0 },
        minimum: 0,
        maximum: 40,
        majorTickLines: { width: 0 }
      },
      title: 'Monthly Temperature Range',
      border: { width: 2, color: '#ff4251' },
      border1: { width: 2, color: '#4C4C4C' }
    };
  },
  provide: {
    chart: [SplineRangeAreaSeries, Category, Legend]
  }

});