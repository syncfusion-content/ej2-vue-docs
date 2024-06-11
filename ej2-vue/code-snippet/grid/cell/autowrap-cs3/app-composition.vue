<template>
  <div id="app">
    <div style="display: inline-block;">
      <label style="padding:  10px 10px 12px 0"> Change the clip mode: </label>
      <ejs-dropdownlist ref='dropdown' id='dropdownlist' index="0" width="150" :dataSource="ddlData" :fields='fields'
        :change="change"></ejs-dropdownlist>
    </div>
    <ejs-grid ref='grid' style="padding: 5px 5px" :dataSource='data' height='315'>
      <e-columns>
        <e-column field='MainFieldsofInvention' headerText='Invention' width='130'></e-column>
        <e-column field='Inventor' headerText='Inventor' width='80'></e-column>
        <e-column field='NumberofPatentFamilies' headerText='Count' width='100'></e-column>
        <e-column field='Country' headerText='Country' width='80'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';
import { ref } from 'vue';
const grid = ref(null);
const fields = { text: 'text', value: 'value' };
const ddlData = [
  { text: 'Ellipsis', value: 'Ellipsis' },
  { text: 'Clip', value: 'Clip' },
  { text: 'Ellipsis with Tooltip', value: 'EllipsisWithTooltip' },
];
const change = function (args) {
  grid.value.getColumnByField('MainFieldsofInvention').clipMode = args.value
  grid.value.refreshColumns();
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