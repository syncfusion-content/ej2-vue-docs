
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { DataManager, WebApiAdaptor, DataUtil } from "@syncfusion/ej2-data";

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);
Vue.use(CheckBoxPlugin);
let SERVICE_URI = "https://services.syncfusion.com/vue/production/";

new Vue(
  {
    el: '#app',
    template: `
    <div id="app">
      <div style="display: flex; align-items: center; margin-bottom: 10px">
        <label style="margin-right: 10px">Select Timezone:</label>
        <ejs-dropdownlist
          id="timezone"
          width="150px"
          :dataSource="timeZones"
          :fields="field"
          v-model="selectedTimezone"
          :change="onTimezoneChange"
        ></ejs-dropdownlist>
      </div>
      <div style="margin-bottom: 10px">
        <ejs-checkbox
          label="Prevent Timezone Conversion"
          ref="timezoneCheckboxRef"
          :change="onCheckboxChange"
        ></ejs-checkbox>
      </div>
      <ejs-grid ref="grid" :dataSource="data" :height="315" :load="load">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="140"></e-column>
          <e-column field="Freight" headerText="Freight" textAlign="Right" format="C" width="120"></e-column>
          <e-column field="OrderDate" headerText="Order Date" textAlign="Right" width="140"></e-column>
        </e-columns>
      </ejs-grid>
    </div>  `,
    data() {
      return {
        data: new DataManager({
          url: SERVICE_URI + 'api/Orders',
          adaptor: new WebApiAdaptor()
        }),
        selectedTimezone: -12,
        field: { text: "text", value: "value" },
        timeZones: [
          { value: -12, text: "-12:00 UTC" },
          { value: -11, text: "-11:00 UTC" },
          { value: -10, text: "-10:00 UTC" },
          { value: -9, text: "-09:00 UTC" },
          { value: -8, text: "-08:00 UTC" },
          { value: -7, text: "-07:00 UTC" },
          { value: -6, text: "-06:00 UTC" },
          { value: -5, text: "-05:00 UTC" },
          { value: -4, text: "-04:00 UTC" },
          { value: -3, text: "-03:00 UTC" },
          { value: -2, text: "-02:00 UTC" },
          { value: -1, text: "-01:00 UTC" },
          { value: 0, text: "+00:00 UTC" },
          { value: 1, text: "+01:00 UTC" },
          { value: 2, text: "+02:00 UTC" },
          { value: 3, text: "+03:00 UTC" },
          { value: 4, text: "+04:00 UTC" },
          { value: 5, text: "+05:00 UTC" },
          { value: 5.5, text: "+05:30 UTC" },
          { value: 6, text: "+06:00 UTC" },
          { value: 7, text: "+07:00 UTC" },
          { value: 8, text: "+08:00 UTC" },
          { value: 9, text: "+09:00 UTC" },
          { value: 10, text: "+10:00 UTC" },
          { value: 11, text: "+11:00 UTC" },
          { value: 12, text: "+12:00 UTC" },
          { value: 13, text: "+13:00 UTC" },
          { value: 14, text: "+14:00 UTC" },
        ],
      };
    },
    methods: {
      onTimezoneChange(args) {
        this.selectedTimezone = Number(args.value);
        this.$refs.grid.ej2Instances.freezeRefresh();
      },
      onCheckboxChange(args) {
        this.$refs.grid.ej2Instances.freezeRefresh();
      },
      load(args) {
        DataUtil.serverTimezoneOffset = this.$refs.timezoneCheckboxRef.ej2Instances.checked
          ? 0
          : this.selectedTimezone;
      },
    }
  }
);