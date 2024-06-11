<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :allowRowDragAndDrop="true" :selectionSettings="selectOptions"
      :rowDropSettings="rowDropOptions" id="Grid" :rowDrop="rowDrop">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="130"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="120" format="yMd" textAlign="Right"></e-column>
        <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="130"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="130"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, RowDD, Selection, Page } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
const grid = ref(null);
const data = employeeData;
const selectOptions = { type: "Multiple" };
const rowDropOptions = { targetID: "Grid" };
const rowDrop = function (args) {
  args.cancel = true;
  var value = [];
  for (var r = 0; r < args.rows.length; r++) {
    value.push(args.fromIndex + r);
  }
  grid.value.reorderRows(value, args.dropIndex);
}
provide('grid', [RowDD, Page, Selection]);
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