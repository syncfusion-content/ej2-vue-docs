import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";

Vue.use(GridPlugin);
Vue.use(SwitchPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
  <div style="padding: 0px 0px 20px 0px; display:flex">
    <label style="padding: 0px 20px 0px 0px;font-weight: bold">Enable/Disable Query String</label>
    <ejs-switch ref="switch" id="switch"  @change="toggleQueryString"></ejs-switch>
  </div>
  <p id="message">{{message}}</p>  
  <ejs-grid ref="grid" :dataSource='data' allowPaging='true'  :actionBegin="onActionBegin">
    <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
      <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
      <e-column field='OrderDate' type="date" headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
    </e-columns>
  </ejs-grid> 
</div>`,

data() {
  return {
    data: data,
    message: "",
  };
},
methods: {
  toggleQueryString: function (args) {
    this.$refs.grid.$el.ej2_instances[0].pageSettings.enableQueryString =
      args.checked;
  },
  onActionBegin(args) {
    if (
      args.requestType === "paging" &&
      this.$refs.grid.$el.ej2_instances[0].pageSettings.enableQueryString
    ) {
      this.message = "Current URL:" + window.location.href;
    }
  },
},
provide: {
  grid: [Page],
}

});