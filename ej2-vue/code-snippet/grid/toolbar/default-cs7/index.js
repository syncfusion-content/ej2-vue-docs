
import Vue from "vue";
import { GridPlugin, Toolbar } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :toolbar='toolbar' :created='created' height='175px'>
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' :isPrimaryKey='true' width='90'></e-column>
              <e-column field='CustomerID' headerText='Customer ID' type='string' width='100'></e-column>
              <e-column field='Freight' headerText='Freight' type='number' textAlign='Right' format='C2' width='80'></e-column>
              <e-column field='OrderDate' headerText='OrderDate' type='date' textAlign='Right' format='yMd' width='100'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      toolbar: ['Print', 'Search'],
    };
  },
  methods: {
    created: function () {
      let toolbar = this.$refs.grid.ej2Instances.element.querySelector(".e-toolbar");
      this.$refs.grid.ej2Instances.element.appendChild(toolbar);
    }
  },
  provide: {
    grid: [Toolbar]
  }

});