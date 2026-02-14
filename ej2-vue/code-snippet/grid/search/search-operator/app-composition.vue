<template>
  <div id="app">
    <div style="display: inline-block;">
      <label style="padding:  10px 10px 12px 0"> Change the search operators: </label>
      <ejs-dropdownlist ref='dropdown' id='dropdownlist' index="0" width="150" :dataSource="ddlData" :fields='fields'
        :change="change"></ejs-dropdownlist>
    </div>
    <ejs-grid ref="grid" style="padding-top: 5px" :dataSource='data' :searchSettings='searchOptions'
      :toolbar='toolbarOptions' height='272px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=80></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=80></e-column>
        <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type="date"
          width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Search } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js'
const grid = ref(null);
const toolbarOptions = ['Search'];
const ddlData = [
  { text: 'startswith', value: 'startswith' },
  { text: 'endswith', value: 'endswith' },
  { text: 'wildcard', value: 'wildcard' },
  { text: 'like', value: 'like' },
  { text: 'equal', value: 'equal' },
  { text: 'not equal', value: 'notequal' },
];
const searchOptions = { operator: 'contains' };
const change = function (args) {
  grid.value.ej2Instances.searchSettings.operator = args.value;
}
provide('grid', [Toolbar, Search]);
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