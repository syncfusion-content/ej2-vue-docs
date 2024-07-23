
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit, CommandColumn } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid :dataSource='data' :editSettings='editSettings' height='310px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100 :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120 :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2' :validationRules='freightRules'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150 :validationRules='shipCountryRules'></e-column>
        <e-column headerText='Commands' width=120 :commands='commands' ></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
    data: data,
    editSettings: { allowEditing: true, allowDeleting: true },
    orderIDRules: { required: true, number: true },
    freightRules: { required: true, min: 1, max: 1000 },
    customerIDRules: { required: true },
    shipCountryRules: { required: true },
    commands: [{ type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' } },
      { type: 'Delete', buttonOption: { cssClass: 'e-flat', iconCss: 'e-delete e-icons' } },
      { type: 'Save', buttonOption: { cssClass: 'e-flat', iconCss: 'e-update e-icons' } },
      { type: 'Cancel', buttonOption: { cssClass: 'e-flat', iconCss: 'e-cancel-icon e-icons' } }]
  };
},
provide: {
  grid: [Page, Edit, Toolbar, CommandColumn]
}

});