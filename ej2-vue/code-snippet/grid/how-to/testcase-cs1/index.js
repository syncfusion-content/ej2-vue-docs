
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { customerData } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid id='Grid' :dataSource="data" height='315px'>
          <e-columns>
            <e-column field='CustomerID' headerText='CustomerID' textAlign='Right' width=150></e-column>
            <e-column field='ContactName' headerText='ContactName' width=120></e-column>
            <e-column field='Address' headerText='Address' textAlign='Right' width=150></e-column>
            <e-column field='Country' headerText='Country' textAlign='Right' width=120></e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: customerData
    };
  },
});