
import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { DataManager, WebApiAdaptor, Query } from "@syncfusion/ej2-data";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(GridPlugin);
Vue.use(ButtonPlugin);
const SERVICE_URI = 'https://services.syncfusion.com/vue/production/api/Orders';

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div style="padding-bottom:20px">
      <ejs-button ref='button' v-on:click.native="executeQuery">Execute Query</ejs-button>
    </div>
    <p v-if="statusMessage" style="text-align:center;color:red;margin:3px;">{{ statusMessage }}</p>
    <ejs-grid ref="grid" id="grid" :dataSource="result" height="275px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="160"></e-column>
        <e-column field="EmployeeID" headerText="Employee ID" width="120" textAlign="Right"></e-column>
        <e-column field="Freight" headerText="Freight" width="150" format="C2" textAlign="Right"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>`,

data() {
  return {
    statusMessage: "",
    result: [],
    dataManager: new DataManager({
      url: SERVICE_URI,
      adaptor: new WebApiAdaptor(),
    }),
  };
},
methods: {
  executeQuery: function(args) {
    this.statusMessage = "Fetching data...";
    const query = new Query();
    this.dataManager
      .executeQuery(query)
      .then((response) => {
        this.result = response.result;
        this.statusMessage = `Data fetched successfully! Total Records: ${response.result.length}`;
      })
      .catch((error) => {
        this.statusMessage = "Error fetching data!";
      });
  },
},
provide: {
  grid: [Page]
}

});