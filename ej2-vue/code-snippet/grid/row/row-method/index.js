
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
      <div id="app">
      <ejs-grid ref="grid" :dataSource="data" :dataBound="customizeRows">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="100"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="120">
          </e-column>
          <e-column field="Freight" headerText="Freight" textAlign="Right" format="C" width="100"></e-column>
          <e-column field="OrderDate" type="Date" headerText="Order Date" textAlign="Right" format="yMd" width="100"></e-column>
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
  customizeRows: function () {
    this.$refs.grid.getRowByIndex(2).style.background = 'rgb(193, 228, 234)';
  }
 },

});