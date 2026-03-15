<template>
  <div id="app">
    <div style="display: inline-block;">
      <label style='padding:  10px 10px 15px 0'> Column name : </label>
      <ejs-dropdownlist ref='columnDropDown' id='columnDropDown' index="0" width="150" :dataSource="columnData"
        :fields='fields'></ejs-dropdownlist>
    </div>
    <div style="display: inline-block;">
      <label style='padding:  10px 10px 15px 0; margin-left:5px'> Sorting direction : </label>
      <ejs-dropdownlist ref='directionDropDown' id='directionDropDown' index="0" width="150" :dataSource="directionData"
        :fields='fields'></ejs-dropdownlist>
    </div>
    <ejs-button style="margin: 5px" ref='button' cssClass='e-outline' v-on:click="addSortColumn">Add sort
      column</ejs-button>
    <ejs-grid ref='grid' style="margin-top: 10px" :dataSource='data' :allowSorting='true' :sortSettings='initialSort'
      height='315px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        <e-column field='Freight' headerText='Freight' width='80' format='C2' textAlign='Right'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Sort } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';
const grid = ref(null);
const columnDropDown = ref(null);
const directionDropDown = ref(null);
const initialSort = {
  columns: [{ field: 'ShipName', direction: 'Ascending' },]
};
const fields = { text: 'text', value: 'value' };
const columnData = [
  { text: 'Order ID', value: 'OrderID' },
  { text: 'Customer ID', value: 'CustomerID' },
  { text: 'Freight', value: 'Freight' },
];
const directionData = [{ text: 'Ascending', value: 'Ascending' },
{ text: 'Descending', value: 'Descending' }];
const addSortColumn = function () {
  grid.value.ej2Instances.sortColumn(
    columnDropDown.value.$el.ej2_instances[0].value,
    directionDropDown.value.$el.ej2_instances[0].value,
    true
  );
}
provide('grid', [Sort]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";</style>