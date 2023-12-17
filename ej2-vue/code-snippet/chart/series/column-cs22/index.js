
import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";
import { DataManager, Query } from '@syncfusion/ej2-data';

Vue.use(ChartPlugin);

let dataManager = new DataManager({
    url: 'https://services.syncfusion.com/vue/production/api/orders'
});
let query = new Query().take(5).where('Estimate', 'lessThan', 3, false);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-chart id="container" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :title='title'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='CustomerID' yName='Freight' :query='queries'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: dataManager,
      queries: query,
        primaryXAxis: {
          valueType: 'Category'
        },
        primaryYAxis: {
          title: 'Freight rate in U.S. dollars'
        },
        title: 'Container freight rate'
    };
  },
  provide: {
    chart: [ColumnSeries, Category]
  }

});