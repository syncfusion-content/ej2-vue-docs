import Vue from "vue";
import { GridPlugin ,Page} from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
    <div style="padding: 20px 0px 0px 0px">
      <ejs-button @click.native='onClick'>clear Row Selection</ejs-button>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource='data' :selectedRowIndex=2 allowPaging=true 
      :selectionSettings='selectionOptions' :pageSettings='pageOptions'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right'
          width=120></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120>
          </e-column>
          <e-column field='ShipCountry' headerText='Ship Country' width=130>
          </e-column>
          <e-column field='Freight' headerText='Freight' format= 'C2' 
          width=100></e-column>
        </e-columns>
      </ejs-grid>
      </div>
  </div>
`,

data() {
  return {
    data: data,
    selectionOptions : { mode: 'Row', type: 'Multiple' },
    pageOptions : { pageSize: 5 }
  };
},
methods: {
 onClick() {
   this.$refs.grid.clearRowSelection()
  }
},
  provide: {
  grid: [Page]
}

});