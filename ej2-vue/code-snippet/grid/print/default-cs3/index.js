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
    <div style="padding-bottom:20px">
      <ejs-button cssClass="e-danger"  v-on:click.native="onClick">Print</ejs-button>
    </div>
    <ejs-grid ref='grid' :dataSource='data' height='280px'>
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
    onClick: function () {
      this.$refs.grid.ej2Instances.print();
    }
  }
 
});