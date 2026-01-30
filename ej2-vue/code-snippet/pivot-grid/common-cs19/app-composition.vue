<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height">
    </ejs-pivotview>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, VirtualScroll } from "@syncfusion/ej2-vue-pivotview";

const dataSourceSettings = {
  catalog: "Adventure Works DW 2008 SE",
  cube: "Adventure Works",
  providerType: "SSAS",
  enableSorting: true,
  url: "https://bi.syncfusion.com/olap/msmdpump.dll",
  localeIdentifier: 1033,
  rows: [{ name: "[Customer].[Customer]", caption: "Customer" }],
  columns: [
    {
      name: "[Product].[Product Categories]",
      caption: "Product Categories",
    },
    { name: "[Measures]", caption: "Measures" },
  ],
  values: [
    { name: "[Measures].[Customer Count]", caption: "Customer Count" },
    {
      name: "[Measures].[Internet Sales Amount]",
      caption: "Internet Sales Amount",
    },
  ],
  filters: [{ name: "[Date].[Fiscal]", caption: "Date Fiscal" }],
  filterSettings: [
    {
      name: "[Date].[Fiscal]",
      items: [
        "[Date].[Fiscal].[Fiscal Quarter].&[2002]&[4]",
        "[Date].[Fiscal].[Fiscal Year].&[2005]",
      ],
      levelCount: 3,
    },
  ],
  formatSettings: [
    { name: "[Measures].[Internet Sales Amount]", format: "C0" },
  ],
};
const height = 350;

provide('pivotview', [VirtualScroll],);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-pivotview/styles/tailwind3.css";
</style>