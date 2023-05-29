
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";

Vue.use(TooltipPlugin);
Vue.use(GridPlugin);

  
new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-tooltip ref="tooltip" target=".e-rowcell" :beforeRender="beforeRender">
      <ejs-grid ref="grid" :dataSource="data" height="315px">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
          <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="90"></e-column>
          <e-column field="ShipName" headerText="Ship Name" width="120"></e-column>
        </e-columns>
      </ejs-grid>
    </ejs-tooltip>
    </div>
`,

    data() {
      return {
        data: data
      };
    },
    methods: {
      beforeRender: function (args) {
        if (args.target.closest("td")) {
           this.$refs.tooltip.content = args.target.innerText;
        }
      }
    }
  
});