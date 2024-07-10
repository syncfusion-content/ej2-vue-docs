<template>
  <div id="app">
    <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' :actionBegin="actionBegin" height='280px' >
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" isPrimaryKey="true" :validationRules='orderIDRules' textAlign="Right" width="90"></e-column>
        <e-column field="CustomerID" headerText="Employee Name" textAlign="Left" width="100"></e-column>
        <e-column field="FeedbackDetails" headerText="Employee Feedback" :editTemplate="'editTemplate'" textAlign="Left" width="120"></e-column>
      </e-columns>
      <template v-slot:editTemplate>
        <ejs-dropdownlist v-model="orderData.FeedbackDetails" :dataSource="dropDownEnumValue" :fields="dropdownFields" popupHeight="150px">
        </ejs-dropdownlist>
      </template>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';

const Feedback = {
  Positive: 0,
  Negative: 1,
};
const orderIDRules = { required: true };
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const dropdownFields= { text: 'FeedbackDetails', value: 'FeedbackDetails' };
const dropDownEnumValue= Object.keys(Feedback).filter((key) => !isNaN(Number(Feedback[key])));
const orderData= ref(null);
const actionBegin= function(args) {
  if (args.requestType === 'beginEdit' || args.requestType === 'add') {
    orderData.value = Object.assign({}, args.rowData);
  }
  if (args.requestType === 'save') {
    args.data.FeedbackDetails = orderData.value.FeedbackDetails;
  }
}
provide('grid', [Edit, Toolbar]);
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