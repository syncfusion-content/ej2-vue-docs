<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource="data" :editSettings="editSettings" :toolbar="toolbar" :frozenColumns="2" allowPaging="true" :pageSettings="pageSettings">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90 isPrimaryKey="true"></e-column>
        <e-column field='OrderDate' headerText='Order Date' width=100 format='yMd' textAlign='Right' :edit="datePickerParams"></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100 freeze='Left'></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit, Freeze, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { DatePicker } from '@syncfusion/ej2-calendars';
let datepickerObj;
function createDatePicker() {
  return document.createElement('input');
}
function destroyDatePicker() {
  if (datepickerObj) {
    datepickerObj.destroy();
  }
}
function readDatePicker() {
  return datepickerObj ? datepickerObj.value : null;
}
function writeDatePicker(args) {
  datepickerObj = new DatePicker({
    value: new Date(args.rowData[args.column.field]),
    floatLabelType: 'Never',
  });
  datepickerObj.appendTo(args.element);
}
const datePickerParams = {
  create: createDatePicker,
  destroy: destroyDatePicker,
  read: readDatePicker,
  write: writeDatePicker
};
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
const toolbar = ["Add", "Edit", "Delete", "Update", "Cancel"];
const pageSettings={ pageCount: 5 };
provide('grid',  [Toolbar, Edit, Freeze, Page]);
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