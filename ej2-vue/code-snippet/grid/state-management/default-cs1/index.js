
import Vue from "vue";
import { GridPlugin, Page, Filter } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-button id="restore" @click.native="clickHandler" content="Restore to initial state"></ejs-button>

        <ejs-grid ref="grid" :id='gridId' :dataSource='data' :enablePersistence='true' :allowPaging='true' :allowFiltering='true' height='230px'>
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
    var gridId = 'OrderDetails';
    return {
      data: data,
      gridId: gridId,
    };
  },
  methods: {
    clickHandler: function () {
      this.gridId = `OrderDetails` + Math.floor(Math.random() * 10);
      location.reload();
    }
  },
  provide: {
    grid: [Page, Filter]
  }

});