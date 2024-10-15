import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import {  employeeData } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-button id='delete' @click.native='clickDelete'>Delete Multiple</ejs-button>
    <div class="control-section" style="padding-top:20px">
      <ejs-grid ref="grid" :dataSource='data' :editSettings='editSettings' :selectionSettings="selectOptions">
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules' width=100>
          </e-column>
          <e-column field='CustomerID' headerText='Customer ID' :validationRules='customerIDRules' width=120></e-column>
          <e-column field='Freight' headerText='Freight' textAlign='Right' editType='numericedit' width=120 
          format='C2' :validationRules='freightIDRules'></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' :validationRules="shipCountryRules" editType='dropdownedit' width=150></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
`,
data() {
  return {
    data: employeeData,
    editSettings: {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
    },
    selectOptions: { type: 'Multiple' },
    orderIDRules: { required: true },
    customerIDRules: { required: true, minLength: 5 },
    shipCountryRules : { required: true },
    freightIDRules: { required: true, min: 1, max: 1000 }
  };
},
methods: {
  clickDelete: function () {
    const gridInstance = this.$refs.grid.$el.ej2_instances['0'];
    const selectedRecords = gridInstance.getSelectedRecords();
    selectedRecords.forEach(record => {
      gridInstance.deleteRecord('OrderID', record);
    });
  }
},
provide: {
  grid: [Page, Edit, Toolbar]
}
});