<template>
  <div id="app">
    <p id="message">{{message}}</p>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :enableHover='false' :dataSource="data"
       :selectionSettings="selectionOptions" :rowSelected="rowSelected"
       :rowSelecting="rowselecting" :rowDeselected="rowDeselected"
       :rowDeselecting="rowDeselecting">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120">
          </e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="120">
          </e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="130">
          </e-column>
          <e-column field="Freight" headerText="Freight" format="C2" width="100">
          </e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>

<script setup>
import{ref} from"vue"
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns} from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const selectionOptions = { mode: 'Row', type: 'Multiple' };
const message = ref("");
const rowselecting = function(args) {
  message.value = `Trigger rowSelecting`;
  if (args.data.CustomerID == 'VINET')
    args.cancel = true;
}
const rowSelected = function(args) {
  message.value = ` Trigger rowSelected`;
  if (args.data.Freight > 10 || args.data.Freight <= 140)
    args.row.style.backgroundColor = 'rgb(96, 158, 101)';
}
const rowDeselecting = function(args) {
  message.value = `Trigger rowDeselecting`;
  if (args.data.Freight > 140)
    args.row.style.backgroundColor = 'yellow';
}
const rowDeselected = function(args) {
  message.value = `Trigger rowDeselected`;
  if (args.data.Freight <= 10)
    args.row.style.backgroundColor = 'red';
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