
import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";
import { DataManager, Query } from '@syncfusion/ej2-data';

Vue.use(ChartPlugin);

let dataManager = new DataManager({
    url: 'https://mvc.syncfusion.com/Services/Northwnd.svc/Tasks/'
});
let query = new Query().take(5).where('Estimate', 'lessThan', 3, false);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-chart id="container" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='Assignee' yName='Estimate' :query='queries' name='Story Point'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: dataManager,
      queries: query,
        primaryXAxis: {
           rangePadding: 'Additional',
           valueType: 'Category',
           title: 'Assignee'
        },
        primaryYAxis: {
           title: 'Estimate',
            minimum: 0,
            maximum: 3,
            interval: 1
        }
    };
  },
  provide: {
    chart: [ColumnSeries, Category]
  }

});