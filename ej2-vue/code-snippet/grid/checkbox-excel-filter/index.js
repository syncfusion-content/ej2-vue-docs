
import Vue from "vue";
import { GridPlugin, Filter } from "@syncfusion/ej2-vue-grids";
import { DataManager, Query, UrlAdaptor } from "@syncfusion/ej2-data";
Vue.use(GridPlugin);

;
new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid ref='grid' :dataSource="getTradeData" :query="query" :allowPaging='true' :allowFiltering='true'
      :allowSorting='true' :pageSettings='pageSettings' :filterSettings='filterSettings'>
      <e-columns>
        <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right'></e-column>
        <e-column field='Employees' headerText='Employee Name' width='150'></e-column>
        <e-column field='Designation' headerText='Designation' width='130' textAlign='Right'></e-column>
        <e-column field='CurrentSalary' headerText='CurrentSalary' width='120' format='C2' textAlign='Right'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

  data() {
    return {
      pageSettings: { pageCount: 5 },
      filterSettings: { type: "Excel", enableInfiniteScrolling: true },
    };
  },
  methods: {
  },
  computed: {
    getTradeData: function () {
        let SERVICE_URI = "https://services.syncfusion.com/vue/production/";
        let getTradeData = new DataManager({
            url: SERVICE_URI + 'api/UrlDataSource',
            adaptor: new UrlAdaptor()
        });
        return getTradeData;
    },
    query: function () {
        let query = new Query().addParams('dataCount', '10000');
        return query;
    }
  },
  provide: {
    grid: [Filter, Page, Sort],
  },

});
