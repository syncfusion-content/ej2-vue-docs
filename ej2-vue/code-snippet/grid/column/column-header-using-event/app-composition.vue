<template>
  <div id="app">
    <ejs-grid :dataSource="data" allowPaging="true" :headerCellInfo="onHeaderCellInfo" >
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Center"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="150">
        </e-column>
        <e-column field="OrderDate" type="Date" headerText="Order Date" width="130" format="yMd" textAlign="Center" >
        </e-column>
        <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Center"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
    const onHeaderCellInfo = function (args) {
      if (args.cell.column.field == "OrderDate")
        args.node.classList.add("customcss");
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
.e-grid .e-headercell.customcss {
  color: rgb(14, 10, 10);
  background-color: #52c5dcab;
}
</style>