<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" allowPaging="true" :selectionSettings="selectionOptions" :rowDataBound="rowDataBound" :dataBound="dataBound"
      height="273px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" isPrimaryKey="true" width="100"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="EmployeeID" headerText="Employee ID" textAlign="Right" width="120"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="120"></e-column>
        <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
import { ref } from "vue";
const grid = ref(null);
const selectionOptions = { type: "Multiple", mode: "Row" };
const pageOptions = { pageSize: 5 };
let selIndex = [];
const rowDataBound = function (args) {
  if (args.data["EmployeeID"] > 3) {
    selIndex.push(parseInt(args.row.getAttribute("data-rowindex"), 10));
  }
};
const dataBound = function () {
  if (selIndex.length) {
    grid.value.selectRows(selIndex);
    selIndex = [];
  }
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