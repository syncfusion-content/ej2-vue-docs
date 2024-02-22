import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from "./datasource.js";
Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-button  v-on:click.native="refreshHeader">Refresh Header</ejs-button>
      <div style='padding:20px 0px 0px 0px'>
        <ejs-grid ref="grid" :dataSource="data">
          <e-columns>
            <e-column field="OrderID" headerText="Order ID"></e-column>
            <e-column field="CustomerID" headerText="Customer ID"></e-column>
            <e-column field="OrderDate" type="Date" headerText="Order Date" format="yMd">
            </e-column>
            <e-column field="Freight" headerText="Freight"></e-column>
            </e-columns>
        </ejs-grid>
      </div>
    </div>
`,

  data() {
    return {
      data: data,
    };
  },
  methods: {
    refreshHeader: function () {
      const column = this.$refs.grid.getColumnByField('CustomerID');
      column.headerText = 'New Header Text'; // update the header text of the column object
      this.$refs.grid.refreshHeader(); // refresh the grid header
    }
  }
});