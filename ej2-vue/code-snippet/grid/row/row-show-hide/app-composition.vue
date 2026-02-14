<template>
  <div id="app">
    <div style="padding:2px 0px 0px 0px">
      <ejs-checkbox ref="checkbox" label="Show / Hide Row" :change="onCheckBoxChange"></ejs-checkbox>
    </div>
    <p id="message">{{ message }}</p>
    <ejs-grid ref="grid" :dataSource="data" height="350">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="150"></e-column>
        <e-column field="OrderDate" type="date" headerText="Order Date" width="130" format="yMd" textAlign="Right"></e-column>
        <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right"></e-column>
        <e-column field="ShippedDate" type="date" headerText="Shipped Date" width="130" format="yMd" textAlign="Right"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { CheckBoxComponent as EjsCheckbox} from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";
const grid = ref(null);
      let hiddenRows = []; 
      let message = ref(null); 
      let rowIndex=0;
    const onCheckBoxChange = (args) => {
      if (args.checked) {
        for ( let i = 0;i < grid.value.ej2Instances.getRowsObject().length;i++) {
          if ( grid.value.ej2Instances.getRowsObject()[i].data.CustomerID === "VINET") {
            rowIndex =grid.value.ej2Instances.getRowsObject()[i].index;
            grid.value.getRowByIndex(rowIndex).style.display = "none";
            hiddenRows.push(rowIndex);
          }
        }
        if (hiddenRows.length > 0) {
          message.value = `Rows with a customer name column value of VINET have been hidden`;
        }
      } else {
        hiddenRows.forEach((rowIndex) => {
          grid.value.getRowByIndex(rowIndex).style.display = "";
        });
        hiddenRows = [];
        message.value = "Show all hidden rows";
      }
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
  font-weight: bold;
}
</style>