
import Vue from "vue";
import { GridPlugin, DetailRow } from "@syncfusion/ej2-vue-grids";
import { data, employeeData } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid ref='grid' :dataSource='parentData' height='265px' :childGrid='childGrid' :dataBound='onDataBound'>
        <e-columns>
          <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
          <e-column field='FirstName' headerText='FirstName' width=100></e-column>
          <e-column field='LastName' headerText='Last Name' width=100></e-column>
          <e-column field='City' headerText='City' width=100></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

  data() {
    return {
      parentData: employeeData,
      childGrid: {
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
          { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
          { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
          { field: 'ShipCity', headerText: 'Ship City', width: 100 },
          { field: 'ShipName', headerText: 'Ship Name', width: 120 }
        ]
      }
    }
  },
  methods: {
    onDataBound: function() {
        this.$refs.grid.ej2Instances.detailRowModule.expand(2); // initially 2nd chid Grid will expand.
    }
  },
  provide: {
      grid: [DetailRow]
  }

});