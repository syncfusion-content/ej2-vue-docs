import Vue from "vue";
import { ChartPlugin, CandleSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Candle' xName='x' high='high' low='low' open='open' close='close' width=2 :emptyPointSettings='emptyPointSettings'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'Jan', open: 120, high: 160, low: 100, close: 140 },
        { x: 'Feb', open: 150, high: 190, low: 130, close: 170 },
        { x: 'Mar', open: null, high: 170, low: 110, close: 150 },
        { x: 'Apr', open: 160, high: 180, low: 120, close: 140 },
        { x: 'May', open: 150, high: 170, low: 110, close: 130 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        title: 'Date',
        majorGridLines: { width: 0 }
      },
      primaryYAxis: {
        title: 'Price',
        minimum: 80,
        maximum: 200,
        interval: 20
      },
      title: "Shirpur Gold Refinery Share Price",
      emptyPointSettings: {
        mode: 'Average'
      }
    };
  },
  provide: {
    chart: [CandleSeries, Category]
  }

});