<template>
  <div id="app">
    <div style="display: inline-block;">
      <label style='padding:  10px 10px 15px 0'> Column name : </label>
      <ejs-dropdownlist ref='dropDown' id='dropDown' index="0" width="140" :dataSource="columnData"
        :fields='fields'></ejs-dropdownlist>
    </div>
    <ejs-button ref='button' cssClass='e-outline' v-on:click="removeSortColumn">Remove sort column</ejs-button>
    <ejs-grid ref='grid' style="padding: 10px 10px" :dataSource='data' :allowSorting='true' :sortSettings='initialSort'
      height='315px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
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
const dropDown = ref(null);
const initialSort = {
  columns: [
    { field: 'CustomerID', direction: 'Ascending' },
    { field: 'ShipName', direction: 'Descending' },
  ]
};
const fields = { text: 'text', value: 'value' };
const columnData = [
  { text: 'Customer ID', value: 'CustomerID' },
  { text: 'Order ID', value: 'OrderID' },
  { text: 'Ship Name', value: 'ShipName' },
  { text: 'Ship City', value: 'ShipCity' },
];
const removeSortColumn = function () {
  grid.value.ej2Instances.removeSortColumn(dropDown.value.$el.ej2_instances[0].value);
}
provide('grid', [Sort]);
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