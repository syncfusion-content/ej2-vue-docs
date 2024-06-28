
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { employeeData } from './datasource.js';
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-button  v-on:click.native="btnClick">Grid is Addable</ejs-button >
    <div style="padding-top:20px">
        <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' :cellEdit="cellEdit" :beforeBatchAdd="beforeBatchAdd" :beforeBatchDelete="beforeBatchDelete" height='240px'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100 :validationRules='orderIDRules'></e-column>
            <e-column field='Role' headerText='Role' width=120 :validationRules='roleRules'></e-column>
            <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2' :validationRules='freightIDRules'></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150 :validationRules='shipCountryRules'></e-column>
          </e-columns>
        </ejs-grid>
    </div>
  </div>
`,

data() {
  return {
    data: employeeData,
    orderIDRules: { required: true },
    shipCountryRules: { required: true },
    roleRules: { required: true },
    freightIDRules: { required: true, min: 1, max: 1000 },
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    isAddable: true,
  };
},
methods: {
  cellEdit(args) {
    if (args.rowData["Role"] === "Employee") {
      args.cancel = true;
    }
  },
  beforeBatchAdd(args) {
    if (!this.isAddable) {
      args.cancel = true;
    }
  },
  beforeBatchDelete(args) {
    if (args.rowData["Role"] === "Employee") {
      args.cancel = true;
    }
  },
  btnClick(args) {
    args.target.innerText === "Grid is Addable" ? (args.target.innerText = "Grid is Not Addable") : (args.target.innerText = "Grid is Addable");
    this.isAddable = !this.isAddable;
  }
},
provide: {
  grid: [Page, Edit, Toolbar]
}

});