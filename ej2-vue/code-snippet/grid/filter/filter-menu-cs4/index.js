
import Vue from "vue";
import { GridPlugin,Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' allowFiltering='true' :filterSettings='filterOptions' height='273px' >
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
              <e-column field='OrderDate' headerText='Order Date' :format='format' type='date' width=100></e-column>
              <e-column field='Verified' headerText='Verified' :displayAsCheckBox='true' width=100></e-column>
              <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

      data: () => {
        return {
          data: data,
          format:'yMd',
          filterOptions: {
            type: 'Menu',
            operators: {
              stringOperator: [
                { value: 'startsWith', text: 'Starts With' },
                { value: 'endsWith', text: 'Ends With' },
                { value: 'contains', text: 'Contains' },
                { value: 'equal', text: 'Equal' },
                { value: 'notEqual', text: 'Not Equal' }
              ],
              numberOperator: [
                { value: 'equal', text: 'Equal' },
                { value: 'notEqual', text: 'Not Equal' },
                { value: 'greaterThan', text: 'Greater Than' },
                { value: 'lessThan', text: 'Less Than' }
              ],
              dateOperator: [
                { value: 'equal', text: 'Equal' },
                { value: 'notEqual', text: 'Not Equal' },
                { value: 'greaterThan', text: 'After' },
                { value: 'lessThan', text: 'Before' }
              ],
              booleanOperator: [
                { value: 'equal', text: 'Equal' },
                { value: 'notEqual', text: 'Not Equal' }
              ]
            }
          },
        };
      },
      provide: {
        grid: [Filter],
      },
    
});