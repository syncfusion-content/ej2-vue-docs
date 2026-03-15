<template>
  <div id="app">
    <ejs-grid :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' :allowPaging='true'
      :pageSettings='pageOptions' height='273px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='ShipCountry' headerText='ShipCountry' width=100></e-column>
        <e-column field='CustomerID' headerText='Name' width=100></e-column>
        <e-column field='ShipName' headerText='ShipName' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Group, Page, Data } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
let oldGenerateQuery = Data.prototype.generateQuery;
Data.prototype.generateQuery = function () {
  const query = oldGenerateQuery.call(this, true);
  // Check if 'pageQuery' is available in the prototype chain
  if (Data.prototype.hasOwnProperty('pageQuery')) {
    const pageQueryFn = Data.prototype['pageQuery'];
    pageQueryFn.call(this, query);
  }
  return query;
};
const pageOptions = { pageSize: 5 };
const groupOptions = { columns: ["ShipCountry"] };
provide('grid', [Group, Page]);
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