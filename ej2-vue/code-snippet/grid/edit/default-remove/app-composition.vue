<template>
  <div id="app">
    <div style='padding:2px 2px 20px 3px'>
      <ejs-checkbox ref="checkbox" label="Enable/Disable validation rule for customerID coulumn" :checked="true"></ejs-checkbox>
    </div>
    <ejs-grid ref="grid" :dataSource="data" :editSettings="editSettings" :toolbar="toolbar" height="273"
    :actionComplete="actionComplete">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" isPrimaryKey="true" :validationRules="orderIDRules" width="100"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120" :validationRules="customerIDRules"  ></e-column>
        <e-column field="Freight" headerText="Freight" textAlign="Right" :validationRules="freightRules" editType="numericedit" width="120" format="C2"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" editType="dropdownedit" width="150" :validationRules="shipCountryRules">
       </e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { CheckBoxComponent as EjsCheckbox} from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

const grid = ref(null); 
const checkbox = ref(null); 
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const orderIDRules = { required: true, number: true };
const freightRules = { required: true, min: 1, max: 1000 };
const shipCountryRules = { required: true };

const actionComplete = function(args) {
  const formObj = grid.value.ej2Instances.editModule.formObj;
  const customerIDRules = {
    required: true,
    minLength: [5, 'Customer ID should have a minimum length of 5 characters']
  };

  if (args.requestType === 'beginEdit' || args.requestType === 'add') {
    if (checkbox.value.ej2Instances.checked) {
      formObj.addRules('CustomerID', customerIDRules);
    } 
  }
};

provide('grid', [Page, Edit, Toolbar]);
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
