
import Vue from "vue";
import { PivotViewPlugin, IDataSet } from "@syncfusion/ej2-vue-pivotview";
import { DataManager, WebApiAdaptor, ODataAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';

Vue.use(PivotViewPlugin);

let remoteData: DataManager = new DataManager({
  url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders/',
  adaptor: new WebApiAdaptor(),
  crossDomain: true
}).executeQuery(new Query().take(8)).then((e: ReturnOption) => {
  );
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height"> </ejs-pivotview>
    </div>
`,

    data () {
      return {
          let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
          pivotGridObj.dataSourceSettings = {
                dataSource: remoteData as DataManager,
                expandAll: true,
                filters: [],
                columns: [{ name: 'OrderDate'}, { name: 'ShipCity' }],
                rows: [{ name: 'OrderID' }, { name: 'CustomerID' }],
                values: [{ name: 'Freight' }]
          },
          height: 350
        }
      }
    }
  
});