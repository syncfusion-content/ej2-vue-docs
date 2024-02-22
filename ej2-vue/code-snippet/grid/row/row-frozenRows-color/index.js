import Vue from "vue";
import { GridPlugin, Freeze } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
      <div id="app">
        <ejs-grid ref="grid" style="padding: 5px 5px" :dataSource='data' height=315 :frozenRows=3 :allowSelection='false'  :enableHover='false'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='OrderDate' headerText='Order Date' width=100 format='yMd' textAlign='Right'></e-column>
            <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=130></e-column>
            <e-column field='ShipAddress' headerText='Ship Address' width=140></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
            <e-column field='ShipRegion' headerText='Ship Region' width=80></e-column>
            <e-column field='ShipPostalCode' headerText='Ship Postal Code' width=110></e-column>
            <e-column field='Freight' headerText='Freight' width=80></e-column>
          </e-columns>
        </ejs-grid>
      </div>
`,

data() {
  return {
  data: data,
  };
},
provide: { grid: [Freeze] }

});