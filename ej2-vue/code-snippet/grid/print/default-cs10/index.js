
import Vue from "vue";
import { GridPlugin, Page, Toolbar ,DetailRow} from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { employeeData, data } from "./datasource.js";

Vue.use(DropDownListPlugin);
Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div style="display: flex; align-items: center; padding-bottom: 20px;">
      <label style="margin-right: 20px;"><h4>Select Mode</h4></label>
      <ejs-dropdownlist width="200px" index="0" ref="sample" :dataSource='dropdownData' :change='onModeChange' popupHeight='220px'></ejs-dropdownlist>
    </div>
    <ejs-grid ref="grid" :dataSource='employeeData' height='265px' :childGrid='childGrid' :toolbar='["Print"]' :hierarchyPrintMode='hierarchyPrintMode'>
      <e-columns>
        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
        <e-column field='FirstName' headerText='FirstName' width=150></e-column>
        <e-column field='LastName' headerText='Last Name' width=150></e-column>
        <e-column field='City' headerText='City' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
    employeeData: employeeData,
    dropdownData: ["All", "Expanded", "None"],
    hierarchyPrintMode: "All",
    childGrid: {
      dataSource: data,
      queryString: "EmployeeID",
      columns: [
        {
          field: "OrderID",
          headerText: "Order ID",
          textAlign: "Right",
          width: 120,
        },
        { field: "CustomerID", headerText: "Customer ID", width: 150 },
        { field: "ShipCity", headerText: "Ship City", width: 150 },
        { field: "ShipName", headerText: "Ship Name", width: 150 },
      ],
    },
  };
},
methods: {
  onModeChange: function (args) {
    this.hierarchyPrintMode = args.value;
  },
},
provide: {
  grid: [Toolbar, Page, DetailRow],
},

});