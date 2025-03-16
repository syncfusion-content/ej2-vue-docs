
import Vue from "vue";
import { GridPlugin, Filter, Page } from "@syncfusion/ej2-vue-grids";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { data } from './datasource.js'
Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :allowPaging='true' :pageSettings='pageSettings' :allowFiltering="true" :filterSettings="filterOptions" height="200px" :actionBegin="actionBegin">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="80" textAlign="Right"></e-column>
        <e-column field="CustomerID" headerText="CustomerID" width="90"></e-column>
        <e-column field="Freight" headerText="Freight" width="80"></e-column>
        <e-column field="OrderDate" headerText="OrderDate" width="120" format="yMd"></e-column>
      </e-columns>
    </ejs-grid>
  </div>`,

  data() {
    return {
      data: data,
      pageSettings: { pageSize: 12 },
      filterOptions: { type: "Excel" },
      hostUrl: 'https://services.syncfusion.com/vue/production/'
    };
  },
  methods: {
    actionBegin(args) {
      if (args.requestType === "filterBeforeOpen") {
        args.filterModel.options.dataSource = new DataManager({
          url: this.hostUrl + 'api/Orders',
          adaptor: new WebApiAdaptor(),
        });
      }
    }
  },
  provide: {
    grid: [Filter, Page],
  },

});