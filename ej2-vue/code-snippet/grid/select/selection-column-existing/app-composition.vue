<template>
  <div id="app">
    <div>
      <label style="padding: 30px 17px 0 0">Enter the column index: </label>
      <ejs-textbox ref="textbox" required width="120"></ejs-textbox>
      <ejs-button id="button" @click="onClick">Select Columns</ejs-button>
    </div>        
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource="data" :selectionSettings="selectionOptions">
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
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { TextBoxComponent as EjsTextbox } from "@syncfusion/ej2-vue-inputs";
import { data } from "./datasource.js";
import { ref } from "vue";
const textbox = ref(null);
const grid = ref(null);
const selectionOptions = { allowColumnSelection: true, mode: "Cell" };
const onClick = function () {
  const startIndex = parseInt(textbox.value.ej2Instances.value, 10);
  if (!isNaN(startIndex))
    grid.value.ej2Instances.selectionModule.selectColumnWithExisting(startIndex);
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
</style>