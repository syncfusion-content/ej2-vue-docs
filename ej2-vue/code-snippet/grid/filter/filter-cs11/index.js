
import Vue from "vue";
import { GridPlugin, Filter, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);


new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-button ref='button' cssClass='e-outline' v-on:click.native="onClick">
    Clear filter</ejs-button>
    <ejs-grid ref='grid' style="margin-top: 10px" :dataSource='data' :allowFiltering='true' allowPaging='true' :pageSettings='pageSettings'
      height='273px'>
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
      pageSettings:{ pageSize: 6 }
    };
  },
  methods: {
    onClick: function() {
      this.$refs.grid.clearFiltering();
    }
  },
  provide: {
    grid: [Filter, Page]
  }

});