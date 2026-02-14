<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :dataBound="dataBound" height="320">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="150">
        </e-column>
        <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150">
        </e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
import { ref } from "vue";

const grid = ref(null);
const dataBound = function () {
  grid.value.getColumnHeaderByIndex(0).style.color = 'green';
  grid.value.getColumnHeaderByField('CustomerID').style.background = 'rgb(217, 244, 235)';
  grid.value.getColumnHeaderByField('OrderID').style.background = 'rgb(217, 244, 235)';
  grid.value.getColumnHeaderByField('ShipCountry').style.background = 'rgb(217, 244, 235)';
  grid.value.getColumnHeaderByField('CustomerID').style.color = 'green';
  grid.value.getColumnHeaderByUid('grid-column2').style.background = 'rgb(217, 244, 235)';
  const columnIndex = grid.value.getColumnIndexByField('ShipCountry');
  grid.value.getColumnHeaderByIndex(columnIndex).style.color = 'green';
  const index = grid.value.getColumnIndexByUid('grid-column2');
  grid.value.getColumnHeaderByIndex(index).style.color = 'green';
}
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