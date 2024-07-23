
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);
Vue.use(SwitchPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
      <div style="display: inline-block">
        <label style="padding: 30px 17px 0 0">Choose selection mode:</label>
        <ejs-dropdownlist index="0" width="150" 
          :dataSource="dropdownData" :change="valueChange">
        </ejs-dropdownlist>
      </div>
      <div style="padding: 20px 0px 20px 0px">
        <label style="padding: 0px 20px 0px 0px">Enable/Disable Toggle selection</label>
        <ejs-switch :checked="true"  :change="toggleSelection">
        </ejs-switch>
      </div>
      <div style="padding: 20px 0px 0px 0px">
        <ejs-grid ref="grid" :dataSource="data"  :selectionSettings="selectionOptions" 
          height="315px">
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
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
        dropdownData: [
          { text: 'Row', value: 'Row' },
          { text: 'Cell', value: 'Cell' },
          { text: 'Both', value: 'Both' }
        ]
      };
    },
    methods: {
      valueChange(args) {
        this.$refs.grid.ej2Instances.selectionSettings.mode = args.value;
      },
      toggleSelection(args) {
        this.$refs.grid.ej2Instances.selectionSettings.enableToggle = args.checked;
      }
    }
});