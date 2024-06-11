
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
    <ejs-button id='show' cssClass="e-info" v-on:click='show'> Show </ejs-button>
    <ejs-button id='hide' cssClass="e-info" v-on:click='hide'> Hide </ejs-button>
        <ejs-grid ref='grid' id='grid' :dataSource="data"  height='315px'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' width=90></e-column>
            <e-column field='ShipCity'  headerText='Ship City' width=120></e-column>
            <e-column field='ShipCountry' :visible=false headerText='Ship Country' width=120></e-column>
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
    show: function () {
      let grid = this.$refs.grid.$el.ej2_instances[0];
      grid.showColumns('Customer ID', 'headerText');
    },
    hide: function () {
      let grid = this.$refs.grid.$el.ej2_instances[0];
      grid.hideColumns('Customer ID', 'headerText');
    }
  }

});