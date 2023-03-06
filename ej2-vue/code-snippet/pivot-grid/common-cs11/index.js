
import Vue from "vue";
import { PivotViewPlugin, IDataSet } from "@syncfusion/ej2-vue-pivotview";
import { DataManager, WebApiAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';

Vue.use(PivotViewPlugin);

let remoteData: IDataSet[];
new DataManager({
  url: "https://bi.syncfusion.com/northwindservice/api/orders",
  adaptor: new WebApiAdaptor(),
  crossDomain: true
}).executeQuery(new Query().take(8)).then((e: ReturnOption) => {
    let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
    pivotGridObj.dataSourceSettings.dataSource = e.result as IDataSet[];
  });


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :spinnerTemplate="spinnerTemplate" :height="height"> </ejs-pivotview>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: [],
        expandAll: true,
        filters: [],
        columns: [{ name: 'ProductName', caption: 'Product Name' }],
        rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
        formatSettings: [{ name: 'UnitPrice', format: 'C0' }],
        values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }]
      },
      spinnerTemplate: '<i class="fa fa-cog fa-spin fa-3x fa-fw"></i>',
      height: 350
    }
  }

});