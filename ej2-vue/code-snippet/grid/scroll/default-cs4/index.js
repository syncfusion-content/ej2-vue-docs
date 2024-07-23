
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { SwitchPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js'

Vue.use(GridPlugin);
Vue.use(SwitchPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div style="padding:10px 0px 20px 0px;display:flex">
      <label style="padding: 0px 20px 0px 0px;font-weight: bold">Enable/Disable Sticky Header</label>
      <ejs-switch id="switch" :change="toggleStickyHeader"></ejs-switch>
    </div>
    <div style='height:350px;'>
      <ejs-grid ref='grid' :dataSource='data'>
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
  };
},
methods: {
  toggleStickyHeader(args){
    this.$refs.grid.ej2Instances.enableStickyHeader = args.checked;
  }
 }

});