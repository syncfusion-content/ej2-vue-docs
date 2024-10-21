
import Vue from "vue";
import { GridPlugin, Filter,Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div style="margin-bottom: 20px;">
        <ejs-button id='performFilter' @click.native="filterAction">Filter Customer ID Column</ejs-button>
        <ejs-button style="margin-left: 10px;" id='clearFilter' @click.native="filterAction">Clear Filter</ejs-button>
      </div>

      <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' :allowPaging='true' :filterSettings='filterOptions' height='273px'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
        </e-columns>
      </ejs-grid>
    </div>
   </div>
`,
data() {
  return {
    data: data, 
    filterOptions: {
      type: 'Menu'
    }
  };
},
methods: {
  filterAction:function(args) {
    if (args.currentTarget.id === 'performFilter') {
      this.$refs.grid.ej2Instances.filterByColumn('CustomerID', 'startswith', 'v');
    } else {
      this.$refs.grid.ej2Instances.clearFiltering();
    }
  }
},
provide: {
  grid: [Filter, Page] 
}

});