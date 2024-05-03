
import Vue from "vue";
import { GridPlugin, Aggregate, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid :dataSource='data' height='290px' :allowPaging="true" :aggregates='aggregates'>
          <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
              <e-column field='Freight' headerText='Freight' format='C2' width=80></e-column>
              <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
          </e-columns>
      </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      aggregates: [
        {
          columns: [
            {
              type: ['Sum', 'Max', 'Min'],
              field: 'Freight',
              columnName: 'Freight',
              format: 'C2',
              footerTemplate: 'Sum: ${Sum}, Min:${Min}, Max:${Max}',
            },
          ],
        },
      ],
    };
  },
  provide: {
    grid: [Aggregate, Page]
  }

});