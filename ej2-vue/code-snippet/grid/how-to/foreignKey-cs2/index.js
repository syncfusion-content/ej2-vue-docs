
import Vue from "vue";
import { createElement } from '@syncfusion/ej2-base';
import { GridPlugin, Edit, Toolbar, ForeignKey, Filter  } from "@syncfusion/ej2-vue-grids";
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { DataManager } from '@syncfusion/ej2-data';
import { data,employeeData } from './datasource.js';

let dropInstance;

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' :filterSettings='filteroption' height='270px' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
               <e-column field='EmployeeID' headerText='Employee Name' :dataSource='employeeData' foreignKeyValue='FirstName' :filter='filter' width=120></e-column>
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
          filteroption: { type: 'Menu' },
          filter: {
            ui: {
              create: (args) => {
                let flValInput = createElement('input', { className: 'flm-input' });
                args.target.appendChild(flValInput);
                dropInstance = new DropDownList({
                  dataSource: new DataManager(employeeData),
                  fields: { text: 'FirstName', value: 'EmployeeID' },
                  placeholder: 'Select a value',
                  popupHeight: '200px'
                });
                dropInstance.appendTo(flValInput);
              },
              write: (args) => {
                dropInstance.text = args.filteredValue || '';
              },
              read: (args) => {
                args.fltrObj.filterByColumn(args.column.field, args.operator,dropInstance.text);
              }
            }
          },
        };
      },
      provide: {
        grid: [Filter, ForeignKey, Edit, Toolbar]
      }
    
});