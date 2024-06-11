<template>
  <div id="app">
    <div>
      <label style="padding: 10px 10px">
        Enable or disable HTML Encode
      </label>
      <ejs-switch id="switch" :change="change"></ejs-switch>
    </div>
    <ejs-grid ref='grid' :dataSource="data" height='315' style="padding: 10px 10px">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='<strong> Customer ID </strong>' width=100></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=80></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=120> </e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent as EjsSwitch } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
import { ref } from 'vue';
const grid = ref(null);
const change = function (args) {
  if (args.checked) {
    grid.value.getColumnByField('CustomerID').disableHtmlEncode = false;
  }
  else {
    grid.value.getColumnByField('CustomerID').disableHtmlEncode = true;
  }
  grid.value.refreshColumns()
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