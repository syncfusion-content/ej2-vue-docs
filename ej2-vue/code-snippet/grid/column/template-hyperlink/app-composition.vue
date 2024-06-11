<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" height=315>
      <e-columns>
        <e-column field='EmployeeID' headerText='Employee ID' width='130' textAlign='Right'></e-column>
        <e-column field='LastName' headerText='Last Name' width=150></e-column>
        <e-column field='FirstName' headerText='FirstName' width='120' :template="'columnTemplate'"></e-column>
      </e-columns>
      <template v-slot:columnTemplate="{ data }">
        <a href="#" @click="onClick(data.FirstName)">{{ data.FirstName }}</a>
      </template>
    </ejs-grid>
  </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
const data = employeeData;
const onClick = (firstName) => {
  var url = 'https://www.google.com/search?q=';
  var searchUrl = url + firstName;
  window.open(searchUrl);
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