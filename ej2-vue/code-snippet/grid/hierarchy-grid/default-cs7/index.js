
import Vue from "vue";
import { GridPlugin, DetailRow, Edit, Toolbar } from "@syncfusion/ej2-vue-grids";
import { data, employeeData } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid ref='grid' :dataSource='parentData' height='265px' :childGrid='childGrid'>
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
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
        columns: [
          { field: 'OrderID', headerText: 'Order ID', isPrimaryKey:true, textAlign: 'Right', width: 90 },
          { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', allowEditing:false, width: 80 },
          { field: 'ShipCity', headerText: 'Ship City', width: 100 },
          { field: 'ShipName', headerText: 'Ship Name', width: 100 }
        ],
        actionBegin: function(args) {
          if (args.requestType === "add") {
          // `parentKeyFieldValue` refers to the queryString field value of the parent record.
          args.data.EmployeeID = this.parentDetails.parentKeyFieldValue; // 'this' refers to the instance of the child grid.
          }
        }
      }
    }
  },
  provide: {
      grid: [DetailRow, Edit, Toolbar]
  }

});