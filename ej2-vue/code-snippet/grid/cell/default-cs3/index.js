
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid :dataSource="data" height='315' :selectionSettings='selectionOptions'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=90></e-column>
            <e-column field='ShipName' headerText='Ship Name' textAlign='Right' width=120 > </e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      selectionOptions: { cellSelectionMode: 'Box', type: 'Multiple', mode: 'Cell' }
    };
  }

});