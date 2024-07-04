<template>
  <div id="app">
    <div style="display: inline-block;">
      <label style='padding:  10px 10px 15px 0'> Column name : </label>
      <ejs-dropdownlist ref='dropDown' id='dropDown' index="0" width="130" :dataSource="columnData"
        :fields='fields'></ejs-dropdownlist>
    </div>
    <ejs-button ref='button' style="margin-left:5px; margin-right: 5px " cssClass='e-outline' v-on:click="groupColumn">Group
      column</ejs-button>
    <ejs-button ref='button' style="margin-right: 5px " cssClass='e-outline'
      v-on:click="unGroupColumn"> UnGroup column</ejs-button>
    <ejs-grid ref='grid' style="margin-top: 10px" :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions'
      height='267px'>
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
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Group } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';
const grid = ref(null);
const dropDown = ref(null);
const groupOptions = { showDropArea: false, columns: ['CustomerID', 'ShipCity'] };
const fields = { text: 'text', value: 'value' };
const columnData = [
  { text: 'Customer ID', value: 'CustomerID' },
  { text: 'Order ID', value: 'OrderID' },
  { text: 'Ship Name', value: 'ShipName' },
  { text: 'Ship City', value: 'ShipCity' },
];
const groupColumn = () => {
  grid.value.ej2Instances.groupColumn(dropDown.value.$el.ej2_instances[0].value);
}

const unGroupColumn = () => {
  grid.value.ej2Instances.ungroupColumn(dropDown.value.$el.ej2_instances[0].value);
}
provide('grid', [Group]);
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