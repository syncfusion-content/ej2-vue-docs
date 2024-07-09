
import Vue from "vue";
import { GridPlugin, Toolbar, Edit, ForeignKey } from "@syncfusion/ej2-vue-grids";
import { ComboBoxPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { data, employeeData } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ComboBoxPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' :actionBegin="actionBegin" height='280px' >
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" isPrimaryKey="true" :validationRules='orderIDRules' textAlign="Right" width="90"></e-column>
          <e-column field="EmployeeID" headerText="Employee Name" foreignKeyValue='FirstName' :dataSource="employeeData" :editTemplate="'editTemplate'" width="150"></e-column>
          <e-column field="OrderDate" headerText="Order Date" format="yMd" type="date" editType='datepickeredit' textAlign="Right" width="130"></e-column>
          <e-column field="Freight" headerText="Freight" format="C2" textAlign="Right" width="120"></e-column>
        </e-columns>
        <template v-slot:editTemplate>
          <ejs-combobox v-model="orderData.EmployeeID" :dataSource="employees" :fields="comboFields" >
          </ejs-combobox>
        </template>
      </ejs-grid>
    </div>
`,

  data: () => {
    return {
      data: data,
      employeeData: employeeData,
      orderIDRules: { required: true, number: true },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      comboFields: { text: 'FirstName', value: 'EmployeeID' },
      employees: [
        { FirstName: 'Nancy', EmployeeID: 1 },
        { FirstName: 'Andrew', EmployeeID: 6 },
        { FirstName: 'Janet', EmployeeID: 3 },
        { FirstName: 'Margaret', EmployeeID: 4 },
        { FirstName: 'Steven', EmployeeID: 5 },
        { FirstName: 'Laura', EmployeeID: 8 }
      ],
      orderData:[],
    };
  },
  methods: {
    actionBegin(args) {
      debugger
      if (args.requestType === 'beginEdit' || args.requestType === 'add') {
        this.orderData = Object.assign({}, args.rowData);
      }
      if (args.requestType === 'save') {
        args.data['EmployeeID'] = this.orderData['EmployeeID'];
      }
    }
  },
  provide: {
    grid: [Edit, Toolbar, ForeignKey]
  }

});