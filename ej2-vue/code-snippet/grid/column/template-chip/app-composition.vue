<template>
  <div id="app">
    <ejs-grid :dataSource='data' height='315px' >
      <e-columns>
        <e-column field='LastName' headerText='Last Name' width=150></e-column>
        <e-column field='City' headerText='City' width=150></e-column>
        <e-column field='FirstName' headerText='FirstName' :template="'chipTemplate'" width=200></e-column>
      </e-columns>
      <template v-slot:chipTemplate="{data}">
        <div><ejs-chiplist id="chip" :text='data.FirstName'></ejs-chiplist></div>
    </template>
    </ejs-grid>
  </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { ChipListComponent as EjsChiplist } from '@syncfusion/ej2-vue-buttons';
import { employeeData } from './datasource.js';
const data = employeeData;
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