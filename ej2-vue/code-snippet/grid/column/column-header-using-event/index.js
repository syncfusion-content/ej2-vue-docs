
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid :dataSource="data" allowPaging="true" :headerCellInfo="onHeaderCellInfo" >
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Center"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="150">
          </e-column>
          <e-column field="OrderDate" type="Date" headerText="Order Date" width="130" format="yMd" textAlign="Center" >
          </e-column>
          <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Center"></e-column>
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
    onHeaderCellInfo: function (args) {
      if (args.cell.column.field == 'OrderDate')
        args.node.classList.add('customcss');
    }
  }
});