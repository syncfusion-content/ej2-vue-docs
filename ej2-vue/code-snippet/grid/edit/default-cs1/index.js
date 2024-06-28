
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
  <div id="app">
  <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
    <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' :validationRules='orderIDRules' width=100></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=120 allowEditing='false' :validationRules='customerIDRules'></e-column>
      <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2' :validationRules='freightIDRules'></e-column>
      <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150 :validationRules='shipCountryRules'></e-column>
    </e-columns>
  </ejs-grid>
</div>
`,

  data() {
    return {
      data: data,
      orderIDRules: { required: true },
      shipCountryRules: { required: true },
      customerIDRules: { required: true, minLength: 5 },
      freightIDRules: { required: true, min: 1, max: 1000 },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel']
    };
  },
  provide: {
    grid: [Page, Edit, Toolbar]
  }

});