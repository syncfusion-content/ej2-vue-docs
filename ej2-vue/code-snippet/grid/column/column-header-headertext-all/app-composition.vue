<template>
  <div id="app">
    <ejs-button cssClass="e-success" v-on:click='changeHeaderText'>Change Header Text</ejs-button>
    <div style="padding: 20px 17px 0 0">
      <ejs-grid ref="grid" :dataSource='data' height='280'>
        <e-columns>
          <e-column field='OrderID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' width=120></e-column>
          <e-column field='Freight' textAlign='Right' format='C2' width=90></e-column>
          <e-column field='ShipCity' width=120></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";
import { ref } from 'vue';
const grid = ref(null);
    const headerTextMap = {
      OrderID: "Order ID",
      CustomerID: "Customer ID",
      Freight: "Freight Charge",
      ShipCity: "Ship To City",
    }
  const changeHeaderText = function () {
    grid.value.ej2Instances.columnModel.forEach((column) => {
      column.headerText = headerTextMap[column.field];
    });
    grid.value.refreshHeader();
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
</style>