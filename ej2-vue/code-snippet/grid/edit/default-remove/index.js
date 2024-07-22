
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(CheckBoxPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div style='padding:2px 2px 20px 3px'>
      <ejs-checkbox ref="checkbox" label="Enable/Disable validation rule for customerID coulumn" :checked="true"></ejs-checkbox>
    </div>
    <ejs-grid ref="grid" :dataSource="data" :editSettings="editSettings" :toolbar="toolbar" height="273"
    :actionComplete="actionComplete">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" isPrimaryKey="true" :validationRules="orderIDRules" width="100"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120" ></e-column>
        <e-column field="Freight" headerText="Freight" textAlign="Right" :validationRules="freightRules" editType="numericedit" width="120" format="C2"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" editType="dropdownedit" width="150" :validationRules="shipCountryRules">
       </e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
    data: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: "Normal" },
    toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
    orderIDRules: { required: true, number: true },
    shipCountryRules: { required: true },
    freightRules: { required: true,min: 1, max: 1000},
  };
},
methods: {
  actionComplete: function (args) {
    const formObj = this.$refs.grid.ej2Instances.editModule.formObj;
    const customerIDRules = {
          required: true,
          minLength: [5, 'Customer ID should have a minimum length of 5 characters'],
      };
      if (args.requestType === 'beginEdit' || args.requestType === 'add') {
          if (this.$refs.checkbox.ej2Instances.checked) {
              formObj.addRules('CustomerID', customerIDRules);
          }
      }
  }
},
provide: {
  grid: [Page, Edit, Toolbar],
}

});