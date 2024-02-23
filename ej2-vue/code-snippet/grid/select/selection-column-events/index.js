import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
      <p id="message">{{message}}</p>
      <div style="padding: 20px 0px 0px 0px">
        <ejs-grid ref="grid" :dataSource="data" :selectionSettings="selectionOptions"
          :columnSelected="columnSelected" :columnSelecting="columnselecting"
          :columnDeselected="columnDeselected" :columnDeselecting="columnDeselecting">
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
            width="120"></e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="120">
            </e-column>
            <e-column field="ShipCountry" headerText="Ship Country" width="130">
            </e-column>
            <e-column field="Freight" headerText="Freight" format="C2" width="100">
            </e-column>
          </e-columns>
        </ejs-grid>
      </div>
    </div>
`,

  data() {
    return {
      data: data,
      message: "",
      selectionOptions: { allowColumnSelection: true },
    };
  },
  methods: {
    columnSelected: function (args) {
      this.message = `Trigger columnSelected`;
      args.headerCell.style.backgroundColor = 'rgb(96, 158, 101)';
    },
    columnselecting: function (args) {
      this.message = `Trigger columnSelecting`;
      if (args.column.field == "CustomerID")
        args.cancel = true;
    },
    columnDeselected: function (args) {
      this.message = `Trigger columnDeselected`;
      args.headerCell.style.backgroundColor = 'rgb(245, 69, 69)';
    },
    columnDeselecting: function (args) {
      this.message = `Trigger columnDeselecting`;
      if (args.column.field == "Freight")
        args.cancel = true;
    }
  }

});