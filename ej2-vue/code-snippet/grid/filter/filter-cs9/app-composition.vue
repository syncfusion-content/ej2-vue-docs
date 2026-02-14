<template>
  <div id="app">
    <ejs-button ref='button' cssClass='e-outline' v-on:click="onSingleValueFilter">
      Filter with single value</ejs-button>
    <ejs-button ref='button' style="margin-left: 10px " cssClass='e-outline' v-on:click="onMultipleValueFilter">
      Filter with multiple values</ejs-button>
    <ejs-grid ref='grid' style="margin-top: 10px" :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions'
      height='273px'>
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
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';
const grid = ref(null);
const filterOptions = {
  type: 'Excel'
};
const onSingleValueFilter = function () {
  grid.value.clearFiltering();
  // filter OrderID column with single value
  grid.value.filterByColumn('OrderID', 'equal', 10248);
};
const onMultipleValueFilter = function () {
  grid.value.clearFiltering();
  // filter CustomerID column with multiple values
  grid.value.filterByColumn('CustomerID', 'equal', [
      'VINET',
      'TOMSP',
      'ERNSH',
  ]); 
}
provide('grid', [Filter]);
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