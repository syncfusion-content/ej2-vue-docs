<template>
  <div id="app">
    <ejs-grid :dataSource="data" height='315px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' headerTextAlign='Right'
          width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' type='string' textAlign='Left' headerTextAlign='Left'
          width=90></e-column>
        <e-column field='OrderDate' headerText='Order Date' type='date' textAlign='Center' headerTextAlign='Center'
          format='yMd' width=140></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' type='string' textAlign='Justify'
          headerTextAlign='Justify' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
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