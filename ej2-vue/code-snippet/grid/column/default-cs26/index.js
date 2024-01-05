
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
    <ejs-button @click.native="updateColumns"> Update Columns </ejs-button>
        <ejs-grid ref='grid' :dataSource='data' :height='280'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120 type='date'></e-column>
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
    updateColumns: function() {
      let grid =this.$refs.grid.$el.ej2_instances[0];
      grid.columns[0].textAlign = 'Center';
      grid.columns[0].width = '100';
      grid.columns[2].visible = false;
      grid.columns[1].customAttributes = { class: 'customcss' };
      // Applying changes to the grid
      grid.refreshColumns();
    },
  }

});