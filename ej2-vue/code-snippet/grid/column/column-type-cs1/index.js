
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource="data" height='315px'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' type='number' width=150></e-column>
            <e-column field='CustomerID' headerText='Customer ID' type='string' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2'type='number' width=150></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type='date' width=120></e-column>
        </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data
    };
  },
  provide: {
      grid: []
  }

});