<template>
  <div id="app">
    <div style="display: flex">
      <ejs-button id="small" v-on:click="changeHeaderHeight">Change height 20px</ejs-button>
      <ejs-button id="medium"  v-on:click="changeHeaderHeight">Default height 42px</ejs-button>
      <ejs-button id="big" v-on:click="changeHeaderHeight">Change height 60px</ejs-button>
    </div>
    <div style="padding-top: 20px">
      <ejs-grid ref="grid" :dataSource="data">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" width="120"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="140"></e-column>
          <e-column field="Freight" headerText="Freight" format="C" width="120">
          </e-column>
          <e-column field="OrderDate" type="date" headerText="Order Date" format="yMd" width="140">
          </e-column>
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
    const changeHeaderHeight = function (args) {
      const heightMap = {
        small: "20px",
        medium: "42px",
        big: "60px",
      };
      const headerCells = grid.value
        .getHeaderContent()
        .querySelectorAll(".e-headercell");
      headerCells.forEach((headerCell) => {
        headerCell.style.height = heightMap[args.target.id];
      });
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

#medium,
#big {
  margin-left: 20px;
}
</style>