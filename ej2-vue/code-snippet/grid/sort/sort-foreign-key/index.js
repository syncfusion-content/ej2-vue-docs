
import Vue from "vue";
import { GridPlugin, Sort, ForeignKey } from "@syncfusion/ej2-vue-grids";
import { data, foreignkeyData } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid :dataSource='data' :allowSorting='true' height='315px'>
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
              <e-column field='CustomerID' headerText='Customer ID' foreignKeyValue='ContactName' foreignKeyField='CustomerID' :dataSource='customerData' width=100></e-column>
              <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
              <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      customerData: foreignkeyData,
    };
  },
  provide: {
    grid: [Sort, ForeignKey]
  }

});