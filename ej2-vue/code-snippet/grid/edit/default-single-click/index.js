import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { employeeData  } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid ref="grid" :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' allowPaging='true' :load='load'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100 isPrimaryKey='true' :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120 :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' width=120 format= 'C2' :validationRules='freightRules'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' :validationRules='shipCountryRules' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
      data : employeeData ,
      orderIDRules: {required: true, number: true},
      customerIDRules: { required: true, minLength: 5 },
      freightRules: { required: true, min: 1 },
      shipCountryRules: { required: true },
      shipCountryRules: { required: true },
      editSettings : { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
      toolbar : ['Add', 'Edit', 'Delete', 'Update', 'Cancel']
  };
},
methods: {
 load: function () {
     this.$refs.grid.ej2Instances.element.addEventListener('mouseup', function(e) {
          var instance = this.ej2_instances[0];
          if (e.target.classList.contains("e-rowcell")) {
          if (instance.isEdit)
              instance.endEdit();
              let index = parseInt(e.target.getAttribute("Index"));
              instance.selectRow(index);
              instance.startEdit();
          }
      });
  }
},
provide: {
  grid: [Page, Edit, Toolbar]
}

});