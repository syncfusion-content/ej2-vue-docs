
import Vue from "vue";
import { PivotViewPlugin, Pager } from "@syncfusion/ej2-vue-pivotview";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

Vue.use(PivotViewPlugin);

let remoteData: DataManager = new DataManager({
  url: "https://bi.syncfusion.com/northwindservice/api/orders",
  adaptor: new WebApiAdaptor(),
  crossDomain: true
});


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height" :enablePaging="enablePaging" :pageSettings="pageSettings" :pagerSettings="pagerSettings" :gridSettings="gridSettings"> </ejs-pivotview>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: remoteData as DataManager,
        expandAll: true,
        filters: [],
        columns: [{ name: 'ProductName', caption: 'Product Name' }],
        rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
        formatSettings: [{ name: 'UnitPrice', format: 'C0' }],
        values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }]
      },
      height: 350,
      enablePaging: true,
      pageSettings: {
        rowPageSize: 10,
        columnPageSize: 5,
        currentColumnPage: 1,
        currentRowPage: 1
      },
      pagerSettings: {
        showRowPager: false
      },
      gridSettings: { columnWidth: 120 },
    }
  },
  provide: {
    pivotview: [Pager]
  }

});