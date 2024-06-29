<template>
  <div id="app">
    <ejs-button @click="AddColumns"> Add Columns </ejs-button>
    <ejs-button @click="DeleteColumns"> Delete Columns </ejs-button>
    <ejs-grid ref='grid' :dataSource='data' :height='280'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
        <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120
          type='date'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
import { ref } from 'vue';
const grid = ref(null);
const AddColumns = function () {
  var newColumns = [
    { field: 'ShipCity', headerText: 'Ship City', width: 120 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 120 },
  ];
  newColumns.forEach((col) => {
    grid.value.ej2Instances.columns.push(col);
  });
  grid.value.ej2Instances.refreshColumns();
}
const DeleteColumns = function () {
  grid.value.ej2Instances.columns.pop();
  grid.value.ej2Instances.refreshColumns();
}
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