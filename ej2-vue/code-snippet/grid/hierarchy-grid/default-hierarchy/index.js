
import Vue from 'vue';
import { GridPlugin, DetailRow,Aggregate } from '@syncfusion/ej2-vue-grids';
import { data, employeeData} from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid :dataSource="parentData" height="315px" :childGrid="childGrid">
        <e-columns>
          <e-column field="EmployeeID" headerText="Employee ID" textAlign="Right" width="80"></e-column>
          <e-column field="FirstName" headerText="First Name" width="100"></e-column>
          <e-column field="LastName" headerText="Last Name" width="100"></e-column>
          <e-column field="City" headerText="City" width="120"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

data() {
  return {
    parentData : employeeData,
    childGrid: {
      dataSource: data,
      queryString: 'EmployeeID',
      columns: [
          { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
          { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
          { field: 'ShipCity', headerText: 'Ship City', width: 100 },
          { field: 'Freight', headerText: 'Freight', format:'C2', width: 120 },
          { field: 'ShipName', headerText: 'Ship Name', width: 120 }
      ],
      aggregates: [
          {
              columns: [
                  {
                      type: 'Sum',
                      field: 'Freight',
                      format:'C2',
                      footerTemplate: 'Sum: ${Sum}',
                  },
              ],
          },
          {
              columns: [
                  {
                      type: 'Max',
                      field: 'Freight',
                      format:'C2',
                      footerTemplate: 'Max: ${Max}',
                  },
              ],
          },
      ],
  }

  };
},
provide() {
  return {
    grid: [DetailRow,Aggregate],
  };
}

});