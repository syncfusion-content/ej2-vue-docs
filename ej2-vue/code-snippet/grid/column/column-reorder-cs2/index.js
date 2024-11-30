
import Vue from "vue";
import { GridPlugin, Reorder } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
 <ejs-button ref='button' cssClass='e-outline' v-on:click.native="reorderByIndex">Reorder column by index</ejs-button>
        <ejs-grid ref='grid' :dataSource="data" :allowReordering='true' height='315px'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100 :allowReordering='false' ></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=80></e-column>
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
    reorderByIndex: function () {
      let grid = this.$refs.grid.$el.ej2_instances[0];
      grid.reorderColumnByIndex(1, 3); // move column from index 1 to index 3
    }
  },
  provide: {
    grid: [Reorder]
  }

});