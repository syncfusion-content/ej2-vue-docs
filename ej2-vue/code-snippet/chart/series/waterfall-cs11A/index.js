import Vue from "vue";
import { ChartPlugin, WaterfallSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
         <ejs-chart id="container" :primaryXAxis='primaryXAxis' :pointRender='pointRender'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Waterfall' xName='x' yName='y' :intermediateSumIndexes='intermediate' :sumIndexes='sum' :cornerRadius = 'cornerRadius'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'Income', y: 4711 },
        { x: 'Sales', y: -1015 },
        { x: 'Development', y: -688 },
        { x: 'Revenue', y: 1030 },
        { x: 'Balance' },
        { x: 'Administrative', y: -780 },
        { x: 'Expense', y: -361 },
        { x: 'Tax', y: -695 },
        { x: 'Net Profit' }
      ],
      primaryXAxis: {
        valueType: 'Category'
      },
      cornerRadius: { topRight: 10, topLeft: 10 },
      sum: [8],
      intermediate: [4]
    };
  },
  provide: {
    chart: [WaterfallSeries, Category]
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