<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource="data" id="gridcomp" :allowPaging='true' :allowSorting='true' :showColumnMenu='true'
      :sortSettings='sortSettings' :columnMenuItems='columnMenuItems' :columnMenuClick='columnMenuClick'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='140' textAlign="Right"></e-column>
        <e-column field='CustomerID' headerText='Customer Name' :showInColumnChooser='false'></e-column>
        <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right"></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' :visible='false' width='150'></e-column>
        <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Sort, ColumnMenu, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
const columnMenuItems = [{ text: 'Clear Sorting', id: 'gridclearsorting' }];
const sortSettings = { columns: [{ direction: "Ascending", field: "OrderID" }] };
const columnMenuClick = function (args) {
  if (args.item.id === 'gridclearsorting') {
    grid.value.clearSorting();
  }
}
provide('grid', [Sort, ColumnMenu, Page]);
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