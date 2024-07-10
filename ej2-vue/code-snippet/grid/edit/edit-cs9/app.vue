<template>
    <div id="app">
        <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' :actionBegin="actionBegin" height='280px' >
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" isPrimaryKey="true" :validationRules='orderIDRules' textAlign="Right" width="90"></e-column>
            <e-column field="EmployeeID" headerText="Employee Name" foreignKeyField='EmployeeID' foreignKeyValue='FirstName' :dataSource="employeeData" :editTemplate="'editTemplate'" width="150"></e-column>
            <e-column field="OrderDate" headerText="Order Date" format="yMd" type="date" editType='datepickeredit' textAlign="Right" width="130"></e-column>
            <e-column field="Freight" headerText="Freight" format="C2" textAlign="Right" width="120"></e-column>
          </e-columns>
          <template v-slot:editTemplate>
            <ejs-combobox v-model="orderData.EmployeeID" :dataSource="employees" :fields="comboFields" >
            </ejs-combobox>
          </template>
      </ejs-grid>
    </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective,Toolbar, Edit, ForeignKey } from "@syncfusion/ej2-vue-grids";
import { ComboBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
import { data, employeeData } from './datasource.js';

export default {
name: "App",
components: {
"ejs-combobox": ComboBoxComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data: () => {
    return {
      data: data,
      employeeData:employeeData,
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
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>