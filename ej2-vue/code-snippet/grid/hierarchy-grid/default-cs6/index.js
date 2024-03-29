
import Vue from "vue";
import { GridPlugin, DetailRow } from "@syncfusion/ej2-vue-grids";
import { employeeData, childdata } from './datasource.js';

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
                    <e-column field='City' headerText='City' width=120></e-column>
                </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      parentData: employeeData,
      childGrid: {
        dataSource: childdata,
        queryString: 'ID',
        columns: [
            { field: 'ID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
            { field: 'ShipCity', headerText: 'Ship City', width: 100 },
            { field: 'ShipName', headerText: 'Ship Name', width: 120 }
        ],
        load: function (){
         this.parentDetails.parentKeyFieldValue = this.parentDetails.parentRowData['EmployeeID'];
        }
      }
    }
  },
  provide: {
      grid: [DetailRow]
  }

});