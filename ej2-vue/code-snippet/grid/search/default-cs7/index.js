
import Vue from "vue";
import { GridPlugin, Toolbar, Search } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js'

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-button id='clear' @click.native='clear'>Clear Search</ejs-button>
        <ejs-grid ref='grid' style="margin-top:5px" :dataSource='data' :searchSettings='searchOptions' :toolbar='toolbarOptions' height='262px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      toolbarOptions: ['Search'],
      searchOptions: { fields: ['CustomerID'], operator: 'contains', key: 'Ha', ignoreCase: true }
    };
  },
  methods: {
    clear: function() {
        this.$refs.grid.ej2Instances.searchSettings.key = "";
    }
  },
  provide: {
    grid: [Search,Toolbar]
  }

});