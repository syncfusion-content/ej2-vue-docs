
import Vue from "vue";
import { ChartPlugin, LineSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-chart  id="container" :title='title' :primaryXAxis='primaryXAxis' :titleStyle='titleStyle'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='month' yName='sales' name='Gold'
                :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
      { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
              ],
        primaryXAxis: {
           valueType: 'Category',
        },
      title: "Unemployment Rates 1975-2010",
      marker: {
        visible: true, width: 10, height: 10
     },
     titleStyle:{
             size:'18px', color:'Red', textAlignment: 'Far', textOverflow: 'Wrap'
        }
    };
  },
  provide: {
    chart: [LineSeries, Category]
  }

});