<template>
  <div id="app">
    <div style="display: flex" >
      <ejs-toolbar :clicked="onToolbarClick">
        <e-items>
          <e-item text="Add" id="add"></e-item>
          <e-item text="Edit" id="edit"></e-item>
          <e-item text="Delete" id="delete"></e-item>
          <e-item text="Update" id="update"></e-item>
          <e-item text="Cancel" id="cancel"></e-item>
        </e-items>
      </ejs-toolbar>
    </div>
    <ejs-grid style='margin-top:10px' ref='grid' :dataSource='data' :editSettings='editSettings' height='273px'>
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
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Edit } from "@syncfusion/ej2-vue-grids";
import { ToolbarComponent as EjsToolbar, ItemsDirective as EItems, ItemDirective as EItem } from "@syncfusion/ej2-vue-navigations";
import { data } from './datasource.js';

const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
const orderIDRules = { required: true };
const customerIDRules = { required: true };
const freightRules= { required: true };      
const editparams = { params: { popupHeight: '300px' } };
const grid = ref(null);

const onToolbarClick = function(args) {
  switch (args.item.id) {
    case 'add':
      grid.value.addRecord();
      break;
    case 'edit':
      grid.value.startEdit();
      break;
    case 'delete':
      grid.value.deleteRecord();
      break;
    case 'update':
      grid.value.endEdit();
      break;
    case 'cancel':
      grid.value.closeEdit();
      break;
  }
}

provide('grid', [Edit]);
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