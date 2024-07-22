<template>
  <div id="app">
    <div style="padding: 10px 0px 20px 0px">
      <ejs-button class="btn" @click="onClick">Get selected row indexes</ejs-button >
    </div>
    <p  id="message">{{showMessage}}</p>
    <ejs-grid ref="grid" :dataSource="data" height="315px" :selectionSettings="selectionOptions">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
        <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";
import { ref } from "vue";
const grid = ref(null);
const showMessage = ref("");
const selectionOptions = { type: "Multiple", mode: "Row" };
const onClick = function () {
  const selectedRowIndexes = grid.value.getSelectedRowIndexes();
  if (selectedRowIndexes.length > 0)
    showMessage.value = "Selected row indexes:" + selectedRowIndexes.join(", ");
};
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