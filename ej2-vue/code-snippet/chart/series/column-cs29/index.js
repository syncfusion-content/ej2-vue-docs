import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";
import { DataManager, Query, WebApiAdaptor } from '@syncfusion/ej2-data';

Vue.use(ChartPlugin);

let dataManager = new DataManager({
  url: 'https://services.syncfusion.com/js/production/api/orders',
  adaptor: new WebApiAdaptor()
});
let query = new Query();

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-chart id="container" :primaryXAxis='primaryXAxis' :title='title'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='CustomerID' yName='Freight' :query='queries'>
                </e-series>
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
      title: 'Order Details'
    };
  },
  provide: {
    chart: [ColumnSeries, Category]
  }

});