<template>
  <div id="app">
    <div style="display: inline-block;">
      <ejs-textbox ref='textbox' placeholder="Search" width='250px'></ejs-textbox>
      <ejs-button style="margin-left:5px" id='search' v-on:click='search'>Search</ejs-button>
    </div>
    <ejs-grid style="margin-top: 5px" ref='grid' :dataSource='data' height='262px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Search } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { TextBoxComponent as EjsTextbox } from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js'
const grid = ref(null);
const textbox = ref(null);
const search = function () {
  var searchText = textbox.value.$el.value;
  grid.value.search(searchText);
}
provide('grid', [Search]);
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
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>