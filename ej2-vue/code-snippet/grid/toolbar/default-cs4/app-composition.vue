<template>
  <div id="app">
    <div style="margin-left:180px">
      <p style="color:red;" id="message">{{ message }}</p>
    </div>
    <ejs-grid ref='grid' :dataSource='data' height='200px' :editSettings='editSettings' :toolbar='toolbar'
      :toolbarClick='clickHandler'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true'
          :validationRules='orderIDRules' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const message = ref(null);
const orderIDRules = { required: true };
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
const toolbar = [
  'Add', 'Edit', 'Delete', 'Update', 'Cancel',
  { text: 'Click', tooltipText: 'Click', prefixIcon: 'e-expand', id: 'Click' }
];
const clickHandler = function (args) {
  if (args.item.id === 'Click') {
    message.value = `Custom Toolbar Clicked`;
  }
}
provide('grid', [Toolbar, Edit]);
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