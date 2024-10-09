
import Vue from "vue";
import { GridPlugin, Page, Filter } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

import { data } from './datasource.js';
Vue.use(ButtonPlugin);
Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
       <ejs-button id="restore"  @click.native="clickHandler">Restore to initial state</ejs-button>
        <ejs-grid ref="grid" id="OrderDetails" :dataSource='data' :enablePersistence='true' :allowPaging='true' :allowFiltering='true'>
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
      data: data
    };
  },
  methods: {
    clickHandler: function () {
      this.$refs.grid.ej2Instances.enablePersistence = false;
      window.localStorage.setItem("gridOrderDetails", ""); // Here grid is component name and OrderDetails is component ID
      this.$refs.grid.ej2Instances.destroy();
      location.reload();
    }
  },
  provide: {
    grid: [Page, Filter]
  }

});