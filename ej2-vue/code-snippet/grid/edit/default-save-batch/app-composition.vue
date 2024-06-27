<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" allowPaging="true" :pageSettings="pageSettings" :editSettings="editSettings" :toolbar="toolbar" :cellSaved="save">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="140" textAlign="Right" isPrimaryKey="true" :validationRules="orderIDRules"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="140" :validationRules="customerIDRules"></e-column>
        <e-column field="Freight" headerText="Freight" width="140" format="C2" textAlign="Right" editType="numericedit" :validationRules="freightRules"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="140" editType="datetimepickeredit" :format="formatoptions" textAlign="Right" :validationRules="orderDateRules"></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' :edit='editparams' :validationRules="shipCountryRules"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit,Page } from "@syncfusion/ej2-vue-grids";
import { employeeData } from './datasource.js';
const data= employeeData;
const orderIDRules = { required: true };
const orderDateRules = { required: true };
const shipCountryRules = { required: true };
const customerIDRules = { required: true };
const freightRules = { min:1, max:1000 };
const editSettings= { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
const toolbar= ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const editparams = { params: { popupHeight: '300px' } };
const pageSettings = { pageCount: 5 };
const formatoptions = { type: 'dateTime', format: 'M/d/y hh:mm a' };
const grid = ref(null);
const save= function () {
  if(grid.value){
       grid.value.ej2Instances.editModule.batchSave();
  }
};
provide('grid', [Page,Edit, Toolbar]);
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