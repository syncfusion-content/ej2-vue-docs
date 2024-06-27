import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import {  employeeData } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid :dataSource='data' :toolbar='toolbar' :editSettings='editSettings' :selectionSettings="selectOptions"  >
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules' width=100>
        </e-column>
        <e-column field='CustomerID' headerText='Customer ID' :validationRules='customerIDRules' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2' :validationRules='freightIDRules'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' :validationRules="shipCountryRules" width=150></e-column>
        </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
   data : employeeData,
   editSettings :{
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: 'Normal',
  },
  orderIDRules : { required: true },
  customerIDRules : { required: true, minLength: 5 },
  freightIDRules:{required: true, min: 1, max:1000 },
  shipCountryRules : { required: true },

  toolbar : ['Delete'],
  selectOptions : { type: 'Multiple' }
  };
},
provide: {
  grid: [Page, Edit, Toolbar]
}
});