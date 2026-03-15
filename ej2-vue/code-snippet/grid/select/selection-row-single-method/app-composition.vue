<template>
  <div id="app">
    <div>
      <label style="padding: 30px 17px 0 0">Enter the row index: </label>
      <ejs-textbox ref="textbox" required  width="220">
      </ejs-textbox>
    </div>
    <div style="padding: 10px 0 0px 150px">
      <ejs-button id="button" @click="onClick">Select Row</ejs-button>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource="data"  :selectionSettings="selectionOptions" >
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="130"></e-column>
          <e-column field="Freight" headerText="Freight" format="C2" width="100"></e-column>
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
const selectionOptions = { type: "Single", mode: "Row" };
const onClick = function () {
  const rowIndex = parseInt(textbox.value.ej2Instances.value, 10);
  if (!isNaN(rowIndex)) {
    grid.value.selectRow(rowIndex);
  }
};
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