
import Vue from "vue";
import { GridPlugin,Toolbar, Page,Edit } from "@syncfusion/ej2-vue-grids";
import { employeeData } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <template>
    <div id="app">
      <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' :cellEdit="cellEdit" height='273px'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' :validationRules='orderIDRules' textAlign='Right' isPrimaryKey='true' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' :validationRules='customerIDRules' width=120></e-column>
          <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' :validationRules='freightRules' width=120 format= 'C2'></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' :validationRules='shipCountryRules' editType= 'dropdownedit' width=150></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </template>
`,

data() {
  return {
    data: employeeData,
    orderIDRules : { required: true },
    customerIDRules : { required: true },
    freightRules : { min:1, max:1000 },
    shipCountryRules:{ required: true },
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  };
},

methods: {
  cellEdit: function (args) {
    if (args.value === 'France') {
          args.cancel = true;
      }
  },
  
},
provide: {
  grid: [Page, Edit, Toolbar]
}

});