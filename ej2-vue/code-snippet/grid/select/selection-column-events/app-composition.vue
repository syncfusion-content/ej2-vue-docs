<template>
  <div id="app">
    <p id="message">{{message}}</p>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource="data" :selectionSettings="selectionOptions"
        :columnSelected="columnSelected" :columnSelecting="columnselecting"
        :columnDeselected="columnDeselected" :columnDeselecting="columnDeselecting">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
          width="120"></e-column>
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
import {ref} from 'vue'
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const selectionOptions = { allowColumnSelection: true};
const message = ref("");
const columnSelected = function (args) {
  message.value = `Trigger columnSelected`;
  args.headerCell.style.backgroundColor = 'rgb(96, 158, 101)';
}
const columnselecting = function (args) {
  message.value = `Trigger columnSelecting`;
  if (args.column.field == "CustomerID")
    args.cancel = true;
}
const columnDeselected = function (args) {
  message.value = `Trigger columnDeselected`;
  args.headerCell.style.backgroundColor = 'rgb(245, 69, 69)';
}
const columnDeselecting = function (args) {
  message.value = `Trigger columnDeselecting`;
  if (args.column.field == "Freight")
    args.cancel = true;
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
#message {
    color: red;
    text-align: center;
    padding: 0px 0px 10px 0px;
  }
</style>