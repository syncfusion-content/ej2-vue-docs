import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-grid :dataSource='data' :selectedRowIndex=1 :selectionSettings='selectionOptions' height='315px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

  data() {
    return {
      data: data,
      selectionOptions: { type: 'Multiple', mode: 'Row' },
    };
  },
  provide: {
    grid: [Page]
  }

});