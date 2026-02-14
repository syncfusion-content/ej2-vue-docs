<template>
  <div id="app">
    <ejs-grid ref="grid" id="Grid" :dataSource='dataGrid' :editSettings='editSettings' :toolbar='toolbar' height='400px' :actionBegin="actionBegin">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100 ></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120 ></e-column>
        <e-column field="OrderDate" headerText="Order Date" type="date" width="150" format="yMd" editType="datepickeredit"></e-column>     
        <e-column field='Freight' headerText='Freight' textAlign='Right' editType='numericedit' width=120></e-column>
        <e-column field='ShipCity' headerText='Ship City' editType='dropdownedit' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { data } from './datasource.js';
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
const grid = ref(null);
const dataGrid=data;
const editSettings= { allowEditing: true, allowAdding: true, allowDeleting: true };
const toolbar= ["Add", "Edit", "Delete", "Update", "Cancel"];
const actionBegin = function (args) {
  if (args.requestType === 'beginEdit') {
    let minDate = args.rowData['OrderDate'];
    const gridInstance = grid.value?.ej2Instances; // Access the Grid instance.
    const columns = gridInstance.getColumns(); // Retrieve columns array.
    columns.forEach((column) => {
      if (column.field === 'OrderDate') {
        column.edit.params = { min: minDate };
      }
    });
  }
};
provide('grid', [Edit, Toolbar],);
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