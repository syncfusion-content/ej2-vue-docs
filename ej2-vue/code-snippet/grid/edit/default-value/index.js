import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { employeeData } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules' width=100>
          </e-column>
          <e-column field='CustomerID' headerText='Customer ID' defaultValue= 'HANAR' :validationRules='customerIDRules' width=120>
          </e-column>
          <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' :validationRules='freightIDRules' 
          width=120 defaultValue= '1' format= 'C2'></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' :validationRules="shipCountryRules" editType='dropdownedit' defaultValue= 'France' width=150></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

  data() {
    return {
      data: employeeData,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      orderIDRules: { required: true },
      shipCountryRules: { required: true },
      customerIDRules: { required: true, minLength: 3 },
      freightIDRules: { required: true, min: 1, max: 1000 }
    }
  },

  provide: {
    grid: [Page, Edit, Toolbar]
  }

});