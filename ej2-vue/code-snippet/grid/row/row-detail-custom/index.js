import Vue from "vue";
import { GridPlugin,DetailRow,Grid } from "@syncfusion/ej2-vue-grids";
import { data, employeeData } from "./datasource.js";

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid ref="grid" :dataSource='employeeDataParent' height='315' width='auto' :detailDataBound='detailDataBound' :detailTemplate="'detailTemplate'">
        <e-columns>
          <e-column field='FirstName' headerText='First Name' width='140'></e-column>
          <e-column field='LastName' headerText='Last Name' width='140'></e-column>
          <e-column field='Title' headerText='Title' width='150'></e-column>
          <e-column field='Country' headerText='Country' width='150'></e-column>
        </e-columns>
          <template v-slot:detailTemplate>
            <div class = 'custom-grid' ></div>
          </template>
      </ejs-grid>
    </div>
`,

data() {
  return {
    employeeDataParent : employeeData
  };
},
methods: {
  detailDataBound: function (args) {
            let detail = new Grid({
          dataSource: data.filter((item) => item['EmployeeID'] === args.data['EmployeeID']),
          columns: [
              { field: 'OrderID', headerText: 'Order ID', width: 110 },
              { field: 'CustomerID', headerText: 'Customer Name', width: 140 },
              { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
          ]
      });
      detail.appendTo(args.detailElement.querySelector('.custom-grid'));
  }
},
provide: { grid: [DetailRow] }

});