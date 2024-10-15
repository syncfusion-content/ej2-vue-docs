
import Vue from "vue";
import { GridPlugin, Toolbar, Edit ,ForeignKey} from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { data, employeeData } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);


new Vue({
	el: '#app',
	template: `
 <div id="app">
    <ejs-grid :dataSource="dataGrid" :editSettings="editSettings" :toolbar="toolbar" height="273px" :actionBegin="actionBegin">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right" isPrimaryKey="true" :validationRules="orderIDRules"></e-column>
        <e-column field='EmployeeID' headerText='Employee Name' width='120' :dataSource='employeeData'
        foreignKeyValue='FirstName' foreignKeyField='EmployeeID' :editTemplate="'editTemplate'">
          <template v-slot:editTemplate>
            <ejs-dropdownlist id="EmployeeID" width="220" :dataSource="employeeData" :value="orderData.EmployeeID" :fields="dropDownFields" 
            :itemTemplate="'iTemplate'">
              <template v-slot:iTemplate="{ data }">
                <div>
                  <img class="empImage" width="50px" :src="'https://ej2.syncfusion.com/demos/src/grid/images/' + data.EmployeeID + '.png'" 
                    alt="employee" />
                  <div class="ename">{{ data.FirstName }}</div>
                </div>
              </template>
            </ejs-dropdownlist>
          </template>
        </e-column>
        <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right" editType="numericedit" :validationRules="freightRules"></e-column>
        <e-column field="OrderDate" headerText="Order Date" type="date" width="130" editType="datepickeredit" 
        format="yMd" textAlign="Right" :validationRules="orderDateRules"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150" :validationRules="shipCountryRules">
        </e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
    dataGrid: data,
    employeeData: employeeData,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
    orderIDRules: { required: true, number: true },
    freightRules: { required: true, min: 1, max: 1000 },
    shipCountryRules: { required: true },
    orderDateRules: { required: true },
    dropDownFields: { text: 'FirstName', value: 'EmployeeID' },
    orderData: {}
  };
},
methods: {
  actionBegin(args) {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      this.orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
      this.orderData['EmployeeID']=args.data['EmployeeID'] ;
    }
  }
},
provide() {
  return {
    grid: [Edit, Toolbar, ForeignKey],
  };
}

});