<template>
  <div id="app">
    <ejs-grid ref=grid :dataSource='data' :height='240' :created='setHeaderHeight'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Center' format='C2' :customAttributes='customAttributes'
          width=80></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

const customAttributes = { class: "orientationcss" };
const setHeaderHeight = function () {
  const textWidth = document.querySelector(
    ".orientationcss > div"
  ).scrollWidth;
  const headerCell = document.querySelectorAll(".e-headercell");
  for (let i = 0; i < headerCell.length; i++) {
    // Assign the obtained textWidth as the height of the headerCell.
    headerCell.item(i).style.height = textWidth + "px";
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

.orientationcss .e-headercelldiv {
  transform: rotate(90deg);
}
</style>