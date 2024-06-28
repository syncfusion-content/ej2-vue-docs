<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' :allowPaging="true" :pageSettings='pageSettings' :toolbar='toolbarOptions' :toolbarClick='toolbarClick' :printComplete='printComplete' height='272px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' :visible='false' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Page } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
const grid = ref(null);
const pageSettings = { pageSizes: true, pageSize: 10 };
const toolbarOptions = ["Print"];
const toolbarClick = function () {
      const columns =grid.value.ej2Instances.columns;
       for (const column of (columns )) {
        if (column.field == "CustomerID") {
         column.visible = true;
        } else if (column.field == "ShipCity") {
          column.visible = false;
        }
      }
    };
const printComplete = function () {
      const columns =grid.value.ej2Instances.columns;
      for (const column of (columns)) {
        if (column.field == "CustomerID") {
         column.visible = false;
        } else if (column.field == "ShipCity") {
          column.visible = true;
        }
      }
    };
provide("grid", [Toolbar, Page]);
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