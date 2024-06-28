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
      <ejs-grid ref="grid" :dataSource='data' :editSettings='editSettings' :selectionSettings="selectOptions" >
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
    data: employeeData ,
    orderIDRules : { required: true },
    customerIDRules : { required: true, minLength: 5 },
    freightIDRules  : { required: true, min: 1, max: 1000 },
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    isAddable: true
  };
},
methods: {
cellEdit(args) {
  if (args.rowData['Role'] == 'Admin') {
    args.cancel = true;
  }
},
beforeBatchAdd (args) {
  if (!this.isAddable) {
    args.cancel = true;
  }
},
beforeBatchDelete (args) {
  if (args.rowData['Role'] == 'Admin') {
    args.cancel = true;
  }
},
btnClick: function (args) {
    args.target.innerText === "Grid is Addable" ? (args.target.innerText = "Grid is Not Addable") : (args.target.innerText = "Grid is Addable");
    this.isAddable = !this.isAddable;
  },
},
provide: {
  grid: [Page, Edit, Toolbar]
}
});