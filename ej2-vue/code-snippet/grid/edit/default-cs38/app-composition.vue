<template>
  <div id="app">
    <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px'
      :actionComplete='actionComplete'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' editType='numericedit' width=120
          format='C2'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const actionComplete = (args) => {
  if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
    let dialog = args.dialog;
    dialog.height = 400;
    // change the header of the dialog
    dialog.header = args.requestType === 'beginEdit' ? 'Record of ' + args.rowData['CustomerID'] : 'New Customer';
  }
}
provide('grid', [Page, Edit, Toolbar]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";</style>