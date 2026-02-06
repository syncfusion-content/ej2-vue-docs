<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='data' height='260px' allowPaging='true' allowSorting='true' allowFiltering='true' :filterSettings='filterSettings' 
      :editSettings='editSettings' :toolbar='toolbarSettings' :isRowSelectable='isRowSelectable' :allowSelection='true' :selectionSettings='selectionOptions'>
      <e-columns>
        <e-column type='checkbox' width='50' ></e-column>
        <e-column field='OrderID' headerText='Order ID' :isPrimaryKey='true' :validationRules='orderIDRules' textAlign='Right' width='110' ></e-column>
        <e-column field='CustomerName' headerText='Customer Name' :validationRules='customerNameRules' width='120' ></e-column>
        <e-column field='Product' headerText='Product' editType= 'dropdownedit' width='110' ></e-column>
        <e-column field='Amount' headerText='Amount' :validationRules='amountRules' format='C2' textAlign='Right' width='110' ></e-column>
        <e-column field='OrderDate' headerText='Order Date'  editType= 'datepickeredit' format='yMd' textAlign='Right' width='110' ></e-column>
        <e-column field='Status' headerText='Order Status' editType= 'dropdownedit' width='110' ></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Filter, Toolbar, Edit, Sort } from "@syncfusion/ej2-vue-grids";
import { ordersTrackData } from "./datasource.js";

const data = ordersTrackData;
const selectionOptions = { persistSelection: true };
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
const orderIDRules = { required: true };
const customerNameRules = { required: true };
const amountRules = { required: true };
const toolbarSettings = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const filterSettings = { type: 'Excel' };
const isRowSelectable= function (data, columns) {
  return data.Status !== 'Cancelled';
}
provide('grid', [Page, Edit, Toolbar, Filter, Sort]);
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