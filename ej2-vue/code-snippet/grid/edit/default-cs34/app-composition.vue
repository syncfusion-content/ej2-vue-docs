<template>
  <div id="app">
    <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules' width=100>
        </e-column>
        <e-column field='CustomerID' headerText='Customer ID' :validationRules='customerIDRules' width=120></e-column>
        <e-column field='Freight' :validationRules='freightRules' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' :validationRules='shipCountryRules' editType= 'dropdownedit' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const orderIDRules = { required: true };
const customerIDRules = { required: true, minLength: 3 };
const freightRules = { required: true, min: 1, max: 1000 };
const shipCountryRules={ required: true}
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