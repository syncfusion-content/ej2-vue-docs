<template>
  <div id="app">
    <p id="message">{{ message }}</p>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource="data" :selectionSettings="selectionOptions" :cellSelected="cellSelected"
        :cellSelecting="cellselecting" :cellDeselected="cellDeselected" :cellDeselecting="cellDeselecting">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="130"></e-column>
          <e-column field="Freight" headerText="Freight" format="C2" width="100">
          </e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const message = "";
const selectionOptions = { type: 'Multiple', mode: 'Cell' };
const cellSelected = function (args) {
  this.message = ` Trigger cellSelected`;
  args.currentCell.style.backgroundColor = 'rgb(96, 158, 101)';
};
const cellselecting = function (args) {
  this.message = `Trigger cellSelecting`;
  if (args.data.ShipCountry == 'France')
    args.cancel = true;
}
const cellDeselected = function (args) {
  this.message = `Trigger cellDeselected`;
  if (args.cells && args.cells.length > 0) {
    args.cells[0].style.backgroundColor = 'rgb(245, 69, 69)';
  }
}
const cellDeselecting = function (args) {
  this.message = `Trigger cellDeselecting`;
  if (args.cells && args.cells.length > 0) {
    args.cells[0].style.color = 'rgb(253, 253, 253)';
  }
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

#message {
  color: red;
  text-align: center;
  padding: 0px 0px 10px 0px;
}
</style>