<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :allowPaging='true' :pageSettings='pageSettings'
     :allowFiltering="true" :filterSettings="filterOptions" :actionBegin='actionBegin' height="200px">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ProductName' headerText='Product Name' width=110></e-column>
        <e-column field='Quantity' headerText='Quantity' width=110></e-column>n>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
provide('grid', [Filter, Page]);

const filterOptions = { type: "Excel" };
const pageSettings = { pageSize: 6 };

const actionBegin = (args)=>{
  if (args.requestType === "filterchoicerequest" || args.requestType === "filtersearchbegin") {
    args.filterChoiceCount = 3000;
  }
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