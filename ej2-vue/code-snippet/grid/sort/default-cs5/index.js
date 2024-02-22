
import Vue from "vue";
import { GridPlugin, Sort } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid :dataSource='data' :allowSorting='true' height='315px'>
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
              <e-column field='CustomerID' :sortComparer='sortComparer' headerText='Customer ID' width=100></e-column>
              <e-column field='Freight' headerText='Freight' width=80 format='C2'></e-column>
              <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data
    };
  },
  methods: {
    sortComparer: function(reference, comparer) {
      if (reference < comparer) {
        return -1;
      }
      else if(reference > comparer) {
        return 1;
      }
      return 0;
    }
  },
  provide: {
    grid: [Sort]
  }

});