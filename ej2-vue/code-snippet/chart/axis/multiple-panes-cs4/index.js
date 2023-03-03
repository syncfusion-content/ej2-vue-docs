
import Vue from "vue";
import { ChartPlugin, ColumnSeries, LineSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
         <ejs-chart  id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :axes='axes' :columns='columns'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Germany'> </e-series>
                 <e-series :dataSource='seriesData' type='Line' xName='x' yName='y1' xAxisName='xAxis' name='Japan'
                 :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
                { x: 'Jan', y: 15, y1: 33 }, { x: 'Feb', y: 20, y1: 31 }, { x: 'Mar', y: 35, y1: 30 },
                { x: 'Apr', y: 40, y1: 28 }, { x: 'May', y: 80, y1: 29 }, { x: 'Jun', y: 70, y1: 30 },
                { x: 'Jul', y: 65, y1: 33 }, { x: 'Aug', y: 55, y1: 32 }, { x: 'Sep', y: 50, y1: 34 },
                { x: 'Oct', y: 30, y1: 32 }, { x: 'Nov', y: 35, y1: 32 }, { x: 'Dec', y: 35, y1: 31 }
              ],
        primaryXAxis: {
           title: 'Months',
           valueType: 'Category',
           interval: 1,
           span: 2
        },
        primaryYAxis: {
            minimum: 0, maximum: 90, interval: 20,
            lineStyle: { width: 0 },
            title: 'Temperature (Fahrenheit)',
            labelFormat: '{value}°F'
        },
        columns:[
        {
            width: '50%'
        },{
            width: '50%'
        }
    ],
    axes:[
        {
            majorGridLines: { width: 0 },
            columnIndex: 1,
            valueType: 'Category',
            lineStyle: { width: 0 },
            name: 'xAxis'
        }
    ],
      marker: { visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' } },
      title: "Weather Condition"
    };
  },
  provide: {
    chart: [ColumnSeries,LineSeries, Category]
  },

});