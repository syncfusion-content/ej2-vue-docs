
import Vue from "vue";
import { GridPlugin, Group } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div>
    <ejs-button ref='button' style="margin-top: 10px " cssClass='e-outline' v-on:click="clearGroup">Clear Grouping</ejs-button>
    </div>
    <ejs-grid ref='grid' style="padding-top: 10px" :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' height='267px'>
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
      groupOptions: { columns: ['CustomerID', 'ShipCity'] }
    };
  },
  methods: {
    clearGroup: function() {
      let grid = this.$refs.grid.$el.ej2_instances[0];
      grid.clearGrouping()
    }
  },
  provide: {
    grid: [Group]
  }

});