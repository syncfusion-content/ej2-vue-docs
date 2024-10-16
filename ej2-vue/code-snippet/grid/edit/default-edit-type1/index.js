
import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid :dataSource='dataGrid' :editSettings='editSettings' :toolbar='toolbar' height='265px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100 :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID' :edit='stringParams' headerText='Customer ID' width=120 :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' editType='numericedit' :validationRules='freightRules' width=120></e-column>
        <e-column field='ShipCity' headerText='Ship City' editType='dropdownedit' :validationRules='shipCityRules' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
    dataGrid: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
    orderIDRules: { required: true, number: true },
    freightRules: { required: true, min: 1, max: 1000 },
    customerIDRules: { required: true },
    shipCityRules: { required: true },
    stringParams :{
          params: {
              showClearButton: true
          }
      }
  };
},

provide() {
  return {
    grid: [Edit, Toolbar],
  };
}

});