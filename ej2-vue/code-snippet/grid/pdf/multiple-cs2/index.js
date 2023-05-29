
import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :allowPaging="true" :pageSettings='pageSettings' :selectionSettings='selectionOptions' height='272px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' type='string' width=120></e-column>
                <e-column field='Freight' headerText='Freight' type='number' format='C2' textAlign='Right' width=100></e-column>
                <e-column field='ShipName' headerText='Ship Name' type='string' width=180></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      pageSettings: { pageSize: 8 },
      selectionOptions: { type: 'Multiple' }
    };
  },
  provide: {
      grid: [Page]
  }

});