<template>
  <div id="app">
    <div>
    <ejs-button id='loadButton' cssClass='e-outline' v-on:click="onloadData">Load Data</ejs-button>
    <ejs-button id='showButton' style="margin-left: 5px" cssClass='e-outline' v-on:click="showhideSpinner">Show Spinner</ejs-button>
    <ejs-button id='hideButton' style="margin-left: 5px" cssClass='e-outline' v-on:click="showhideSpinner">Hide Spinner</ejs-button>
    </div>
    <ejs-grid ref='grid' :allowPaging='true' style='margin-top:10px' height='315px' >
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
          <e-column field='ProductName' headerText='Product Name' width=110></e-column>
          <e-column field='Quantity' headerText='Quantity' width=100></e-column>
        </e-columns>
      </ejs-grid>
  </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
import { provide, ref } from "vue";
const grid = ref(null);

const onloadData = function() {
  grid.value.showSpinner();
  setTimeout(() => {
    grid.value.ej2Instances.dataSource = data;
    grid.value.hideSpinner();
  }, 1000);
};
const showhideSpinner = function (args) {
  if (args.currentTarget.id === 'showButton') {
    grid.value.showSpinner();
  }
  else {
    grid.value.hideSpinner();
  }
};

provide('grid', [Page]);
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