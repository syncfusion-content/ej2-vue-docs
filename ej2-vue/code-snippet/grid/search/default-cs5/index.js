
import Vue from "vue";
import { GridPlugin, Search } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js'

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);
Vue.use(TextBoxPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div style="display: inline-block;">
          <ejs-textbox ref='textbox'placeholder="Search" width='250px'></ejs-textbox>
          <ejs-button id='search' style="margin-left:5px" v-on:click.native='search'>Search</ejs-button>
        </div>
        <ejs-grid ref='grid' style="margin-top: 5px" :dataSource='data' height='262px'>
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
      data: data
    };
  },
  methods: {
    search: function() {
      var searchText = this.$refs.textbox.$el.value;
      this.$refs.grid.search(searchText);
    }
  },
  provide: {
    grid: [Search]
  }

});