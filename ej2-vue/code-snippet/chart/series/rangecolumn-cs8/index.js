import Vue from "vue";
import { ChartPlugin, RangeColumnSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData1' type='RangeColumn' xName='x' low='low' high='high' :emptyPointSettings='emptyPointSettings'></e-series>
                <e-series :dataSource='seriesData2' type='RangeColumn' xName='x' low='low' high='high' :emptyPointSettings='emptyPointSettings1'></e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData1: [
        { x: 'Jan', low: 0.7, high: 6.1 },    { x: 'Feb', low: 1.3, high: 6.3 },   { x: 'Mar', low: 1.9, high: 8.5 },
        { x: 'Apr', low: null, high: 10.8 },  { x: 'May', low: 5.7, high: 14.40 }, { x: 'Jun', low: 8.4, high: 16.90 },
        { x: 'Jul', low: 10.6, high: 19.20 }, { x: 'Aug', low: 10.5, high: 18.9 }, { x: 'Sep', low: undefined, high: 16.1 },
        { x: 'Oct', low: 6.0, high: 12.5 },   { x: 'Nov', low: 1.5, high: 6.9 },   { x: 'Dec', low: 5.1, high: 12.1 }
      ],
      seriesData2: [
        { x: 'Jan', low: 1.7, high: 7.1 },  { x: 'Feb', low: 1.9, high: 7.7 },   { x: 'Mar', low: 1.2, high: null },
        { x: 'Apr', low: 2.5, high: 9.8 },  { x: 'May', low: 4.7, high: 11.4 },  { x: 'Jun', low: 6.4, high: 14.4 },
        { x: 'Jul', low: 9.6, high: undefined }, { x: 'Aug', low: 10.7, high: 17.9 }, { x: 'Sep', low: 7.5, high: 15.1 },
        { x: 'Oct', low: 3.0, high: 10.5 }, { x: 'Nov', low: 1.2, high: 7.9 },   { x: 'Dec', low: 4.1, high: 9.1 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        title: 'Month'
      },
      primaryYAxis: {
        title: 'Temperature(Celsius)',
        labelFormat: '{value}°C'
      },
      title: 'Maximum and Minimum Temperature',
      emptyPointSettings: {
        mode: 'Average',
        fill: 'red',
        border: { 
          width: 2, 
          color: 'green' 
        }
      },
      emptyPointSettings1: {
        mode: 'Gap'
      }
    };
  },
  provide: {
    chart: [RangeColumnSeries, Category]
  }

});