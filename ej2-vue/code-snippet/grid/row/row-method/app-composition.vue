<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :dataBound="customizeRows">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="100"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120">
        </e-column>
        <e-column field="Freight" headerText="Freight" textAlign="Right" format="C" width="100"></e-column>
        <e-column field="OrderDate" type="Date" headerText="Order Date" textAlign="Right" format="yMd" width="100"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
const grid = ref(null);
    const customizeRows = function () {
      grid.value.getRowByIndex(2).style.background = "rgb(193, 228, 234)";
    }
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>