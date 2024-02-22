
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { data } from "./datasource.js";

Vue.use(GridPlugin);
Vue.use(SwitchPlugin);
Vue.use(DropDownListPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid :dataSource="data" height="315px">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" :headerTemplate="'customerTemplate'" width="140"></e-column>
          <e-column field="Freight" headerText="Freight" format="C" :headerTemplate="'freightTemplate'" width="120"></e-column>
          <e-column field="OrderDate" type="date" textAlign="Right" format="yMd" :headerTemplate="'dateTemplate'" width="140"></e-column>
        </e-columns>
        <template v-slot:customerTemplate="{ data }">
          <div>
            <span class="e-icon-userlogin e-icons employee"></span>
            {{ data.headerText }}
          </div>
        </template>
        <template v-slot:freightTemplate>
          <div>
            <ejs-dropdownlist
              index="0"
              width="130"
              :dataSource="dropdownData"
            ></ejs-dropdownlist>
          </div>
        </template>
        <template v-slot:dateTemplate>
          <div style="display:inline-flex">
            <ejs-switch :change="onSwitchToggle"></ejs-switch>
            <label style="padding: 0px 0px 0px 10px">{{ headerText }}</label>
          </div>
        </template>
      </ejs-grid>
    </div>`,

  data() {
    return {
      data: data,
      dropdownData: ["Freight", "Shipment", "Cargo"],
      headerText: "Order Date",
    };
  },
  methods: {
    onSwitchToggle: function (args) {
      this.headerText = args.checked ? "Purchase Date" : "Order Date";
    },
  }
});