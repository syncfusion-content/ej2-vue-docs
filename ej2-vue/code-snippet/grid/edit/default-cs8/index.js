
import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' width='140' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules'></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width='140' :validationRules='customerIDRules'></e-column>
          <e-column field='Freight' headerText='Freight' width='140' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightRules'></e-column>
          <e-column field='OrderDate' headerText='Order Date' type="date" width='120' :validationRules='orderDateRules' editType='datetimepickeredit' format='yMd' textAlign='Right'></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' width='150' :validationRules='shipCountryRules' editType='dropdownedit' ></e-column>
        </e-columns>
      </ejs-grid>
  </div>
`,

data() {
  return {
    data: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    orderIDRules : { required: true, number: true },
    customerIDRules : { required: true },
    freightRules : { required: true },
    shipCountryRules : { required: true },
    orderDateRules : { required: true },
  };
},
  provide: {
    grid: [Edit, Toolbar]
  }

});