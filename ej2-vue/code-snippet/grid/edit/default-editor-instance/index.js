
import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid ref="grid" :dataSource='dataGrid' :editSettings='editSettings' :toolbar='toolbar' height='265px' :actionComplete="onActionComplete">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100 :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120 :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' editType='numericedit' :validationRules='freightRules' width=120></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' editType='dropdownedit' :validationRules='countryRules' width=150></e-column>
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
    countryRules: { required: true },
  };
},
methods:{
  onActionComplete:function(args) {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      const tableRow = args.row;
      const numericTextBox = tableRow.querySelector('.e-numerictextbox');
      if (numericTextBox) {
        const numericTextBoxInstance = numericTextBox['ej2_instances'][0];
        numericTextBoxInstance.element.style.backgroundColor = 'light pink';
        numericTextBoxInstance.element.style.color = 'black';
        numericTextBoxInstance.element.style.border = '2px solid red';
        numericTextBoxInstance.element.style.textAlign = 'center';
        numericTextBoxInstance.max = 1000;
        numericTextBoxInstance.min = 1;
      }
      const dropDownList = tableRow.querySelector('.e-dropdownlist') ;
      if (dropDownList) {
        const dropDownListInstance = dropDownList['ej2_instances'][0];
        dropDownListInstance.showPopup();
      }
    }
  }
    },
provide() {
  return {
    grid: [Edit, Toolbar],
  };
}

});