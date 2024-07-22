import Vue from "vue";
import { GridPlugin} from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data"  :selectionSettings="selectionOptions">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="150"></e-column>
        <e-column type="date" field="OrderDate" headerText="Order Date" width="130" format="yMd" textAlign="Right"></e-column>
        <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right"></e-column>
        <e-column type="date" field="ShippedDate" headerText="Shipped Date" width="130" format="yMd" textAlign="Right"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
    data: data,
    selectionOptions :{ mode: 'Row',  type: 'Single' },
  };
}

});