<template>
  <div id="app">
    <ejs-button @click="updateColumns"> Update Columns </ejs-button>
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
import { ref } from "vue";
import { data } from './datasource.js';
const grid = ref(null);
const updateColumns = function () {
  let grid = grid.value.ej2Instances;
  grid.value.ej2Instances.columns[0].textAlign = 'Center';
  grid.value.ej2Instances.columns[0].width = '100';
  grid.value.ej2Instances.columns[2].visible = false;
  grid.value.ej2Instances.columns[1].customAttributes = { class: 'customcss' };
  // Applying changes to the grid
  grid.value.ej2Instances.refreshColumns();
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>