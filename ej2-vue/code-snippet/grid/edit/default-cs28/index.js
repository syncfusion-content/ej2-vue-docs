import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { employeeData  } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-button v-on:click.native="btnClick">Grid is Addable</ejs-button >
      <div style="padding-top:20px">
        <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' :actionBegin="actionBegin" >
          <e-columns>
            <e-column field='EmployeeID' headerText='Employee ID' textAlign= 'Right'  isPrimaryKey='true'  :validationRules='orderIDRules' width=100>
            </e-column>
            <e-column field='EmployeeName' headerText='Employee Name' :validationRules='customerNameRules' width=120 format= 'C2'></e-column>
            <e-column field='Role' headerText='Role' :validationRules='roleIDRules' width=120></e-column>
            <e-column field='EmployeeCountry' headerText='Employee Country' :validationRules='employeeCountryIDRules' editType= 'dropdownedit' width=150></e-column>
          </e-columns>
        </ejs-grid>
      </div>
    </div>
`,

data() {
  return {
    data: employeeData ,
    orderIDRules : { required: true },
    employeeCountryIDRules : { required: true },
    roleIDRules : { required: true, minLength: 5 },
    customerNameRules : { required: true },
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    isAddable: true
  };
},
methods: {
  actionBegin: function (args) {
    if (args.requestType === "beginEdit" && args.rowData["Role"] == "Admin") {
        args.cancel = true;
    }
    if (args.requestType === "delete" && args.data[0]["Role"] === "Admin") {
        args.cancel = true;
    }
    if (args.requestType === "add") {
      if (!this.isAddable) {
        args.cancel = true;
      }
    }
  },
  btnClick: function (args) {
    args.target.innerText === "Grid is Addable" ? (args.target.innerText = "Grid is Not Addable") : (args.target.innerText = "Grid is Addable");
    this.isAddable = !this.isAddable;
  },
},
provide: {
  grid: [Page, Edit, Toolbar]
}

});