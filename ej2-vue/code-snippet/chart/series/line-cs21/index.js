import Vue from "vue";
import { ChartPlugin, Category, LineSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :pointRender='pointRender'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='month' yName='sales' width=2 :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { month: 'Jan', sales: 35 },
        { month: 'Feb', sales: 28 },
        { month: 'Mar', sales: 34 },
        { month: 'Apr', sales: 32 },
        { month: 'May', sales: 40 },
        { month: 'Jun', sales: 32 },
        { month: 'Jul', sales: 35 },
        { month: 'Aug', sales: 55 },
        { month: 'Sep', sales: 38 },
        { month: 'Oct', sales: 30 },
        { month: 'Nov', sales: 25 },
        { month: 'Dec', sales: 32 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        title: 'Month'
      },
      primaryYAxis: {
        title: 'Sales count'
      },
      title: "Monthly Sales Comparison",
      marker: { visible: true }
    };
  },
  provide: {
    chart: [Category, LineSeries]
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