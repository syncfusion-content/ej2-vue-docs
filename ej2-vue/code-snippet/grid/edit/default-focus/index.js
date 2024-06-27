import Vue from "vue";
import { GridPlugin, Page, Edit } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :editSettings="editSettings"  :actionComplete="actionComplete" :recordDoubleClick="recordDoubleClick">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" :isPrimaryKey="true" width="120" type="number" :validationRules='orderIDRules'>
        </e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="140" type="string" :validationRules='customerIDRules'>
        </e-column>
        <e-column field="Freight" headerText="Freight" editType="numericedit" textAlign="Right" width="120" format="C2" :validationRules='freightRules'>
        </e-column>
        <e-column field="OrderDate" headerText="Order Date" type="date" textAlign="Right" :validationRules='orderDateRules'  width="140" editType="datetimepickeredit" format="yMMM">
        </e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150" :validationRules='shipCountryRules' editType="dropdownedit" :edit="params">
        </e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

  data() {
    return {
      data: employeeData,
      orderIDRules: { required: true, number: true },
      customerIDRules: { required: true, minLength: 5 },
      freightRules: { required: true, min: 1 },
      shipCountryRules: { required: true },
      orderDateRules: { required: true },
      fieldName: "",
      editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: "Normal",
      },
      params: {
        params: {
          popupHeight: "300px",
        },
      },
    };
  },
  methods: {
    actionComplete(e) {
      if (e.requestType === "beginEdit") {
        e.form.elements[this.$refs.grid.ej2Instances.element.getAttribute("id") +this.fieldName].focus();
      }
    },
    recordDoubleClick(args) {
      this.fieldName = this.$refs.grid.$el.ej2_instances["0"].getColumnByIndex(args.cellIndex).field;
    },
  },
  provide: {
    grid: [Page, Edit],
  },

});