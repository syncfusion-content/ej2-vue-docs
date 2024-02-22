import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
          <p id="message">{{message}}</p>
          <div style="padding: 20px 0px 0px 0px">
            <ejs-grid ref="grid" :dataSource="data" :selectionSettings="selectionOptions"
            :cellSelected="cellSelected" :cellSelecting="cellselecting"
            :cellDeselected="cellDeselected" :cellDeselecting="cellDeselecting">
              <e-columns>
                <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
                width="120"></e-column>
                <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
                <e-column field="ShipCountry" headerText="Ship Country" width="130"></e-column>
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
    message:"",
    selectionOptions :{ type: 'Multiple', mode: 'Cell' },
  };
},
methods: {

cellSelected: function (args) {
  this.message = ` Trigger cellSelected`;
  args.currentCell.style.backgroundColor = 'rgb(96, 158, 101)';
},
cellselecting: function (args) {
  this.message = `Trigger cellSelecting`;
  if (args.data.ShipCountry == 'France')
    args.cancel = true;
},
cellDeselected: function (args) {
  this.message = `Trigger cellDeselected`;
  if (args.cells && args.cells.length > 0) {
    args.cells[0].style.backgroundColor = 'rgb(245, 69, 69)';
  }
},
cellDeselecting: function (args) {
  this.message = `Trigger cellDeselecting`;
  if (args.cells && args.cells.length > 0) {
    args.cells[0].style.color = 'rgb(253, 253, 253)';
  }  
}
}

});