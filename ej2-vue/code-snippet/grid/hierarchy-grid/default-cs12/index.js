
import Vue from "vue";
import { GridPlugin, DetailRow } from "@syncfusion/ej2-vue-grids";
import { data, employeeData } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
    <div style="margin-left:180px"><p style="color:black; font-size: large;" id="message"></p></div>
    <ejs-grid :dataSource='parentData' height='315px' :childGrid='childGrid'>
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
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
          { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
          { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
          { field: 'ShipCity', headerText: 'Ship City', width: 100 },
          { field: 'ShipName', headerText: 'Ship Name', width: 120 }
        ],
        created: function () {
          var parentRowData = this.parentDetails.parentRowData; // 'this' refers to the instance of the child grid.
          document.getElementById('message').innerHTML = `EmployeeID: ${parentRowData.EmployeeID}, FirstName: ${parentRowData.FirstName}, Title: ${parentRowData.Title}`;
        },
      }
    }
  },
  provide: {
    grid: [DetailRow]
  }

});