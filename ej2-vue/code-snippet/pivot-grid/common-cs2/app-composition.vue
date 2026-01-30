<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { PivotViewComponent as EjsPivotview } from "@syncfusion/ej2-vue-pivotview";

const dataSourceSettings = {
  url: "https://bi.syncfusion.com/productservice/api/sales",
  type: "CSV",
  expandAll: false,
  enableSorting: true,
  formatSettings: [
    { name: "Total Cost", format: "C0" },
    { name: "Total Revenue", format: "C0" },
    { name: "Total Profit", format: "C0" }
  ],
  drilledMembers: [{ name: "Item Type", items: ["Baby Food"] }],
  rows: [{ name: "Region" }, { name: "Country" }],
  columns: [{ name: "Item Type" }, { name: "Sales Channel" }],
  values: [
    { name: "Total Cost" },
    { name: "Total Revenue" },
    { name: "Total Profit" }
  ],
  filters: []
};
const height = 350;
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-pivotview/styles/tailwind3.css";
</style>