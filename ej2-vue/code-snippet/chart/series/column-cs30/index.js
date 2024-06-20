import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";
import { DataManager, Query, ODataAdaptor } from '@syncfusion/ej2-data';

Vue.use(ChartPlugin);

class SerialNoAdaptor extends ODataAdaptor {
  processResponse() {
      let i = 0;
      //calling base class processResponse function
      let original = super.processResponse.apply(this, arguments);
      //Adding serial number
      original.result.forEach((item) => item['Sno'] = ++i);
      return { result: original.result, count: original.count };
  }
}

let dataManager = new DataManager({
  url: 'https://services.syncfusion.com/js/production/api/orders',
  adaptor: new SerialNoAdaptor()
});
let query = new Query();

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-chart id="container" :primaryXAxis='primaryXAxis' :title='title'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='CustomerID' yName='Sno' :query='queries'>
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