
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-button id='copy' @click.native='copy'>Copy</ejs-button>
      <ejs-button id='copyHeader' @click.native='copyHeader'>CopyHeader</ejs-button>
      <ejs-grid ref='grid' style="padding: 5px 5px" :dataSource='data' height='280px' :selectionSettings='selectionOptions'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      selectionOptions: { type: 'Multiple'}
    };
  },
  methods: {
    copy: function() {
        this.$refs.grid.copy();
    },
    copyHeader: function() {
        this.$refs.grid.copy(true);
    }
  }

});