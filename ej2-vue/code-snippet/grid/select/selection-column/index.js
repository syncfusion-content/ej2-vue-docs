import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
Vue.use(GridPlugin);
Vue.use(SwitchPlugin);

new Vue({
  el: '#app',
  template: `
      <div id="app">
        <div style="padding: 0px 0px 20px 0px; display:flex">
            <label style="padding: 0px 20px 0px 0px">Enable/Disable column selection</label>
            <ejs-switch :change="toggleColumnSelection">
            </ejs-switch>
        </div>
        <div style="padding: 20px 0px 0px 0px">
          <ejs-grid ref="grid" :dataSource="data" :selectionSettings="selectionOptions" 
          height="315px">
            <e-columns>
              <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
              width="120"></e-column>
              <e-column field="CustomerID" headerText="Customer ID" width="150">
              </e-column>
              <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
              <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
            </e-columns>
          </ejs-grid>
        </div>
      </div>`,

  data() {
    return {
      data: data,
      selectionOptions: { type: 'Multiple' },
    };
  },
  methods: {
    toggleColumnSelection(args) {
      this.$refs.grid.ej2Instances.selectionSettings.allowColumnSelection = args.checked ? true : false;
    }
  }

});