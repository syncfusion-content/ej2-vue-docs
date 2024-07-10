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
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit, ForeignKey } from "@syncfusion/ej2-vue-grids";
import { ComboBoxComponent as EjsCombobox } from "@syncfusion/ej2-vue-dropdowns";
import { data, employeeData } from './datasource.js';

const orderIDRules = { required: true };
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const comboFields= { text: 'FirstName', value: 'EmployeeID' };
const employees= [
  { FirstName: 'Nancy', EmployeeID: 1 },
  { FirstName: 'Andrew', EmployeeID: 6 },
  { FirstName: 'Janet', EmployeeID: 3 },
  { FirstName: 'Margaret', EmployeeID: 4 },
  { FirstName: 'Steven', EmployeeID: 5 },
  { FirstName: 'Laura', EmployeeID: 8 }
];
const orderData= ref(null);
const actionBegin= function(args) {
  if (args.requestType === 'beginEdit' || args.requestType === 'add') {
    orderData.value = Object.assign({}, args.rowData);
  }
  if (args.requestType === 'save') {
    args.data['EmployeeID'] = orderData.value['EmployeeID'];
  }
}
provide('grid', [Edit, Toolbar, ForeignKey]);
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