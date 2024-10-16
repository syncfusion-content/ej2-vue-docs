
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { AutoComplete } from "@syncfusion/ej2-dropdowns";

import { data } from './datasource.js';

Vue.use(GridPlugin);


let inpuElement;
let autoCompleteInstance;
let autoCompleteData = [
  { CustomerID: 'VINET', Id: '1' },
  { CustomerID: 'TOMSP', Id: '2' },
  { CustomerID: 'HANAR', Id: '3' },
  { CustomerID: 'VICTE', Id: '4' },
  { CustomerID: 'SUPRD', Id: '5' },
];
function createCustomerIDFunction() {
  inpuElement = document.createElement('input');
  return inpuElement;
}
function destroyCustomerIDFunction() {
  autoCompleteInstance.destroy();
}
function readCustomerIDFunction() {
  return autoCompleteInstance.value;
}
function writeCustomerIDFunction(args) {
  autoCompleteInstance = new AutoComplete({
    allowCustom: true,
    value: args.rowData[args.column.field],
    dataSource: autoCompleteData,
    fields: { value: "CustomerID", text: "CustomerID" },
  });
  autoCompleteInstance.appendTo(inpuElement);
}

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid ref='grid' :dataSource='dataGrid' :allowPaging='true' :editSettings='editSettings' :pageSettings='pageSettings' :toolbar='toolbar' height='175px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' :isPrimaryKey='true' :validationRules='orderIDRules' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' type='string' :edit='daParams' width=140 :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' type='number' textAlign='Right' editType='numericedit' format='C2' width=120 :validationRules='freightRules'></e-column>
        <e-column field='OrderDate' headerText='Order Date' type='date' editType='datepickeredit' textAlign='Right' format='yMd' width=150  :validationRules='orderDateRules'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
    dataGrid: data,
    pageSettings: { pageSizes: true, pageSize: 5 },
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    daParams: {
      create: createCustomerIDFunction,
      destroy: destroyCustomerIDFunction,
      read: readCustomerIDFunction,
      write: writeCustomerIDFunction,
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    orderIDRules: { required: true, number: true },
    freightRules: { required: true, min: 1, max: 1000 },
    customerIDRules: { required: true },
    shipAddressRules: { required: true },
    orderDateRules: { required: true },

  };
},

provide: {
  grid: [Page, Edit, Toolbar],
}

});