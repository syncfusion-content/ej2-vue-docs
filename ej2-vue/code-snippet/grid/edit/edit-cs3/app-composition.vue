<template>
  <div id="app">
    <div style="display: inline-block;">
      <label style="padding:  10px 10px 12px 0"> Select column to disable editing: </label> 
      <ejs-dropdownlist id='dropdownlist' index="0" width="150" :dataSource="alignmentData" :fields='dropdownFields' :change="changeAlignment"></ejs-dropdownlist>
    </div>
    <ejs-grid style='margin-top:10px' ref='grid' :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width='120' :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightRules'></e-column>
        <e-column field='OrderDate' headerText='Order Date' width='130' format='yMd' editType='datepickeredit' textAlign='Right'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' :edit='editparams'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';

const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const orderIDRules = { required: true };
const customerIDRules = { required: true };
const freightRules= { required: true };      
const editparams = { params: { popupHeight: '300px' } };
const grid = ref(null);
const dropdownFields = { text: 'text', value: 'value' };
const alignmentData = [
  { text: 'Order ID', value: 'OrderID' },
  { text: 'Customer ID', value: 'CustomerID' },
  { text: 'Freight', value: 'Freight' },
  { text: 'Order Date', value: 'OrderDate' },
  { text: 'Ship Country', value: 'ShipCountry' },
];
const currentColumn=ref(null);
const changeAlignment = function(args){
   // Reset the allowEditing property of the previously selected column
    if (currentColumn.value) {
      currentColumn.value.allowEditing = true;
    }
    // Update the 'allowEditing' property for the selected column
    currentColumn.value = grid.value.getColumnByField(args.value);
    currentColumn.value.allowEditing = false;
}

provide('grid', [Edit, Toolbar]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>