import Vue from "vue";
import { ChartPlugin, HiloOpenCloseSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :pointRender='pointRender'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='HiloOpenClose' xName='x' high='high' low='low' open='open' close='close'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'Jan', open: 120, high: 160, low: 100, close: 140 },
        { x: 'Feb', open: 150, high: 190, low: 130, close: 170 },
        { x: 'Mar', open: 130, high: 170, low: 110, close: 150 },
        { x: 'Apr', open: 160, high: 180, low: 120, close: 140 },
        { x: 'May', open: 150, high: 170, low: 110, close: 130 }
      ],
      primaryXAxis: {
        title: 'Month',
        valueType: 'Category'
      },
      primaryYAxis: {
        title: 'Price in Dollar', 
        minimum: 60, 
        maximum: 200, 
        interval: 20,
        labelFormat: '${value}'
      },
      title: "Financial Analysis"
    };
  },
  provide: {
    chart: [HiloOpenCloseSeries, Category]
  },
  methods: {
    pointRender: function (args) {
      if (args.point.index % 2 !== 0) {
        args.fill = '#ff6347';
      }
      else {
        args.fill = '#009cb8';
      }
    }
  }

});