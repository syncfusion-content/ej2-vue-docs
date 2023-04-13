
import Vue from "vue";
import { ChartPlugin, StackingBarSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='StackingBar100' xName='x' yName='y' name='Apple' fill="red" dashArray="5" :border="border" opacity='0.8'> </e-series>
        <e-series :dataSource='seriesData' type='StackingBar100' xName='x' yName='y1' name='Orange' fill="green" dashArray="5" :border="border" opacity='0.8'> </e-series>
        <e-series :dataSource='seriesData' type='StackingBar100' xName='x' yName='y2' name='Wastage' fill="blue" dashArray="5" :border="border" opacity='0.8'> </e-series>
      </e-series-collection>
    </ejs-chart>
    </div>
`,

  data: function() {
    return {
      seriesData:[
           
              { x: 'May', y: 20, y1: 21, y2: -3 }, { x: 'Jun', y: 24, y1: 25, y2: -3.5 },
              { x: 'Jul', y: 28, y1: 27, y2: -4 }, { x: 'Aug', y: 32, y1: 31, y2: -4.5 },
              { x: 'Sep', y: 33, y1: 34, y2: -5 }, { x: 'Oct', y: 35, y1: 34, y2: -5.5 },
              { x: 'Nov', y: 40, y1: 41, y2: -6 }, { x: 'Dec', y: 42, y1: 42, y2: -6.5 }
        ],
        primaryXAxis: {
            valueType: 'Category',
            title: 'Months'
        },
        primaryYAxis:{
          minimum: 0
          },
        title: "Sales Comparison",
        border:{
          width: 2,
          color: 'black'
        }
    };
  },
  provide: {
    chart: [StackingBarSeries, Category]
  },

});