<template>
  <div id="app">
    <div style="display: inline-block; margin-bottom:5px">
      <label style="padding:  10px 10px 12px 0;font-weight: bold;"> Sekect print mode: </label> 
      <ejs-dropdownlist ref='dropdown' id='dropdownlist' index="0"
      width="150" :dataSource="dropDownData" :fields='fields' :change="change"></ejs-dropdownlist>
    </div>
    <ejs-grid id='grid' ref='grid' :dataSource='data' :allowPaging='true' :pageSettings='pageOptions' :toolbar='toolbarOptions'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import {GridComponent as EjsGrid,ColumnDirective as EColumn,ColumnsDirective as EColumns,Toolbar,Page,} from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { data } from "./datasource.js";
const toolbarOptions = ["Print"];
const pageOptions = { pageSize: 6 };
const fields = { text: "text", value: "value" };
const dropDownData = ["AllPages", "CurrentPage"];
const grid = ref(null);
const change = function (args) {
   grid.value.ej2Instances.printMode = args.value;
};
provide("grid", [Toolbar, Page]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
</style>