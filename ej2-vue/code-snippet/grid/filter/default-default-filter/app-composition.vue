<template>
  <div id="app">
    <div style="margin-bottom: 20px;">
      <ejs-button id='performFilter' @click="filterAction">Filter Customer ID Column</ejs-button>
      <ejs-button style="margin-left: 10px;" id='clearFilter' @click="filterAction">Clear Filter</ejs-button>
    </div>
    <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' :allowPaging='true' :filterSettings='filterOptions' height='273px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide,ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter,Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';
const grid = ref(null);

const filterOptions = {
  type: 'Menu'
};

const filterAction= function(args){
    if(args.currentTarget.id === 'performFilter'){
      grid.value.filterByColumn('CustomerID', 'startswith', 'v');
    }
    else{
      grid.value.clearFiltering()
    }
  }
  provide('grid',  [Filter,Page]);

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
.e-filtermenudiv.e-icons.e-icon-filter {
    display: none;
}
</style>