<template>
  <div id="app">
    <div>
      <label style="padding: 30px 40px 0 0">Enter the start row index: </label>
      <ejs-textbox ref="textbox" required width="120"></ejs-textbox>
    </div>
    <div style="padding-top: 10px">
      <label style="padding: 30px 17px 0px 0px">Enter the start column index: </label>
      <ejs-textbox ref="textbox1" required width="120"></ejs-textbox>
    </div>
    <div style="padding-top: 10px">
      <label style="padding: 30px 40px 0 0">Enter the end row index: </label>
      <ejs-textbox ref="textbox2" required width="120"></ejs-textbox>
    </div>
    <div style="padding-top: 10px">
      <label style="padding: 30px 19px 0 0px">Enter the end column index: </label>
      <ejs-textbox ref="textbox3" required width="120"></ejs-textbox>
      <ejs-button id="button" @click="onClick">Select range of Cell</ejs-button>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource="data" :selectionSettings="selectionOptions">
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
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { TextBoxComponent as EjsTextbox } from "@syncfusion/ej2-vue-inputs";
import { data } from "./datasource.js";
import { ref } from "vue";
const grid = ref(null);
const textbox = ref(null);
const textbox1 = ref(null);
const textbox2 = ref(null);
const textbox3 = ref(null);


const selectionOptions = { type: "Multiple", mode: "Cell" };
const onClick = function () {
  let startRowIndex = parseInt(textbox.value.ej2Instances.value, 10);
  let startColumnIndex = parseInt(textbox1.value.ej2Instances.value, 10);
  let endRowIndex = parseInt(textbox2.value.ej2Instances.value, 10);
  let endColumnIndex = parseInt(textbox3.value.ej2Instances.value, 10);
  grid.value.clearCellSelection();
  if (!isNaN(startRowIndex) &&!isNaN(startColumnIndex) && !isNaN(endRowIndex) && !isNaN(endColumnIndex))
    grid.value.selectCellsByRange(
      { rowIndex: startRowIndex, cellIndex: startColumnIndex },
      { rowIndex: endRowIndex, cellIndex: endColumnIndex }
    );
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