
import Vue from "vue";
import { GridPlugin, RowDD, Selection, Page} from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid :dataSource="data" :allowRowDragAndDrop="true" :selectionSettings="selectionOptions" height="400">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="120">
          </e-column>
          <e-column field="OrderDate" headerText="Order Date" width="100" format="yMd" textAlign="Right"></e-column>
          <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right"></e-column>
          <e-column field="ShipCity" headerText="Ship City" width="130">
          </e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="130">
          </e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

data() {
  return {
    data: employeeData,
    selectionOptions :{ type: 'Multiple' }

  };
},
provide: {
  grid: [RowDD, Page, Selection]
}

});