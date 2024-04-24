
import Vue from "vue";
import { createElement } from '@syncfusion/ej2-base';
import { GridPlugin, Edit, Toolbar, ForeignKey } from "@syncfusion/ej2-vue-grids";
import { AutoComplete } from "@syncfusion/ej2-dropdowns";
import { DataManager, Query } from '@syncfusion/ej2-data';
import { data, employeeData } from './datasource.js';

Vue.use(GridPlugin);
var autoComplete;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :editSettings='editoption' :toolbar='toolbar' height='270px' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='EmployeeID' headerText='Employee Name' :dataSource='employeeData' foreignKeyValue='FirstName' :edit='edit' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Center' format='C2' width=80></e-column>
                 <e-column field='ShipCity' headerText='Ship City' width=130></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,
  data: () => {
    return {
      data: data,
      employeeData: employeeData,
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      editoption: { allowEditing: true },
      edit: {
        create: () => { // to create input element
          return createElement('input');
        },
        read: () => { // return edited value to update data source
          let value = new DataManager(employeeData).executeLocal(new Query().where('FirstName', 'equal', autoComplete.value));
          return value.length && value[0]['EmployeeID']; // to convert foreign key value to local value.
        },
        destroy: () => { // to destroy the custom component.
          autoComplete.destroy();
        },
        write: (args) => { // to show the value for date picker
          autoComplete = new AutoComplete({
            dataSource: employeeData,
            fields: { value: args.column.foreignKeyValue },
            value: args.foreignKeyData[0][args.column.foreignKeyValue]
          });
          autoComplete.appendTo(args.element);
        }
      },
    };
  },
  provide: {
    grid: [Edit, ForeignKey, Toolbar]
  },

});