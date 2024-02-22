
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
      <div id="app">
        <ejs-grid ref="grid" :dataSource="data" :enableHover="false" :allowSelection="false" :height="315" :rowDataBound="rowDataBound">
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="100"></e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
            <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="80"></e-column>
            <e-column field="ShipCity" headerText="Ship City" width="130"></e-column>
          </e-columns>
        </ejs-grid>
      </div>
`,

data() {
  return {
    data: data,
  };
},
methods: {
  rowDataBound: function (args) {
    if (args.data["Freight"] < 30) {
      args.row.classList.add("below-30");
    } else if (args.data["Freight"] >= 30 && args.data["Freight"] < 80) {
      args.row.classList.add("below-80");
    } else {
      args.row.classList.add("above-80");
    }
  },
},

});