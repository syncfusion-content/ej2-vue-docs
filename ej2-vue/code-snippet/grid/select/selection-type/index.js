
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { data } from "./datasource.js";

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);


new Vue({
  el: '#app',
  template: `
      <div id="app">
        <div style="display: inline-block">
                <label style="padding: 30px 17px 0 0">Choose selection type:</label>
                <ejs-dropdownlist index="0" width="150" 
                :dataSource="dropdownData" :change="valueChange">
                </ejs-dropdownlist>
            </div>
            <div style="padding: 20px 0px 0px 0px">
                <ejs-grid ref="grid" :dataSource="data" 
                height="315px">
                <e-columns>
                    <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
                    <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
                    <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
                    <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
                </e-columns>
                </ejs-grid>
            </div>
      </div>
`,
  data() {
    return {
      data: data,
      dropdownData: [
        { text: 'Single', value: 'Single' },
        { text: 'Multiple', value: 'Multiple' }
      ]
    };
  },
  methods: {
    valueChange: function (args) {
      this.$refs.grid.ej2Instances.selectionSettings.type = args.value;
    }
  }

});