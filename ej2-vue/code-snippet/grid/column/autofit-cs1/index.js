
import Vue from "vue";
import { GridPlugin, Resize } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource="data" :allowResizing='true' height='400px' width='850px' :autoFit='true'>
          <e-columns>
          <e-column field='OrderID' headerText='Order ID' minWidth='100' width='150' maxWidth='200' textAlign='Right'></e-column>
          <e-column field='CustomerID' headerText='Customer ID' minWidth='8' width='150'></e-column>
          <e-column field='Freight' headerText='Freight' minWidth='8' width='120' format='C2' textAlign='Right'></e-column>
          <e-column field='ShipCity' headerText='Ship City' :allowResizing = 'false' width='150' format="yMd" textAlign='Right'></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' minWidth='8'  width='150'></e-column>
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
      grid: [Resize]
  }

});