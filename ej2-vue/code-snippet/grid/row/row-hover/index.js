import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";

Vue.use(GridPlugin);
Vue.use(SwitchPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <div style="padding:0px 0px 20px 0px; display:flex">
        <label style="margin-right:20px"> Enable/Disable Row Hover</label>
        <ejs-switch :checked="true" :change="toggleRowHover"></ejs-switch>
      </div>
      <ejs-grid ref="grid" :dataSource='data'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
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
    toggleRowHover: function (args) {
      this.$refs.grid.$el.ej2_instances[0].enableHover = args.checked
    }
  }

});