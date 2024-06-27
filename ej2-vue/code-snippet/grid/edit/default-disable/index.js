import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { employeeData } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' :actionBegin="actionBegin">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' :validationRules='orderIDRules' textAlign='Right' isPrimaryKey='true' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' :validationRules='customerIDRules' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 :validationRules='freightRules' format= 'C2'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' :validationRules='shipCountryRules' editType= 'dropdownedit' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

  data() {
    return {
      data: employeeData,
      editSettings: { allowEditing: true, mode: 'Normal' },
      toolbar: ['Edit', 'Update', 'Cancel'],
      orderIDRules: { required: true },
      customerIDRules: { required: true },
      shipCountryRules: { required: true },
      freightRules: { required: true, min: 1, max: 1000 },
    };
  },
  methods: {
    actionBegin: function (args) {
      if (args.requestType === 'beginEdit' && args.rowData.ShipCountry === 'France') {
        args.cancel = true;
      }
    }

  },
  provide: {
    grid: [Page, Edit, Toolbar]
  }

});