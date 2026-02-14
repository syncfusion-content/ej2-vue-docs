<template>
  <div id="app">
    <ejs-button id='show' cssClass="e-info" v-on:click='show'> Show </ejs-button>
    <ejs-button id='hide' cssClass="e-info" v-on:click='hide'> Hide </ejs-button>
    <ejs-grid ref='grid' id='grid' :dataSource="data" height='315px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' width=90></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=120></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
import { ref } from 'vue';
const grid = ref(null);
const show = function () {
  grid.value.ej2Instances.showColumns('Customer ID', 'headerText');
}
const hide = function () {
  grid.value.ej2Instances.hideColumns('Customer ID', 'headerText');
}
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