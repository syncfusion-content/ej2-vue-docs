import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);
Vue.use(TextBoxPlugin);


new Vue({
  el: '#app',
  template: `
  <div id="app">
    <div>
      <label style="padding: 30px 17px 0 0">Enter the row index: </label>
      <ejs-textbox ref="textbox" required  width="220">
      </ejs-textbox>
    </div>
    <div style="padding: 10px 0 0px 150px">
      <ejs-button id="button" @click.native="onClick">Select Row</ejs-button>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource="data"  :selectionSettings="selectionOptions" >
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="130"></e-column>
          <e-column field="Freight" headerText="Freight" format="C2" width="100"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
`,

data() {
  return {
    data: data,
    selectionOptions: { mode: "Row", type: "Single" },
    pageOptions: { pageSize: 5 },
    rowIndex:0,
  };
},
methods: {
  onClick: function () {
    this.rowIndex = parseInt(this.$refs.textbox.ej2Instances.value, 10);
    if (!isNaN(this.rowIndex)) {
      this.$refs.grid.ej2Instances.selectRow(this.rowIndex);
    }
  },
}

});