<template>
  <div id="app">
    <ejs-button v-on:click="refreshHeader">Refresh Header</ejs-button>
    <div style='padding:20px 0px 0px 0px'>
      <ejs-grid ref="grid" :dataSource="data">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID"></e-column>
          <e-column field="CustomerID" headerText="Customer ID"></e-column>
          <e-column field="OrderDate" type="Date" headerText="Order Date" format="yMd">
          </e-column>
          <e-column field="Freight" headerText="Freight"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
 import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";
import { ref } from "vue";
const grid = ref(null);
const refreshHeader = function () {
  const column = this.$refs.grid.getColumnByField("CustomerID");
  column.headerText = "New Header Text"; // update the header text of the column object
  grid.value.refreshHeader(); // refresh the grid header
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