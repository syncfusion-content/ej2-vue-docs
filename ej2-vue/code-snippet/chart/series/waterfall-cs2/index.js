import Vue from "vue";
import { ChartPlugin, WaterfallSeries, Category, DataLabel } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Waterfall' xName='x' yName='y' :intermediateSumIndexes:='intermediate' :sumIndexes='sum' summaryFillColor='black' negativeFillColor='green'
                  :connector='connector' :marker='marker'> </e-series>
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
      primaryYAxis: {
        labelFormat: '${value}M'
      },
      sum: [8],
      intermediate: [4],
      connector: { color: 'blue', width: 1.5 },
      marker: {
        dataLabel: {
          visible: true,
          position: 'Outer',
          font: { size: '11px' }
        }
      },
      title: 'Company Revenue and Profit'
    };
  },
  provide: {
    chart: [WaterfallSeries, Category, DataLabel]
  }

});