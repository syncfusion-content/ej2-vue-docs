<template>
  <div id="app">
    <div style="height:500px;width:600px">
      <ejs-grid :dataSource='data' :allowSorting='true' :allowFiltering='true' height='273'>
        <e-columns>
          <e-column type='RowNumber' textAlign='Center'></e-column>
          <e-column field='ProductID' headerText='Product ID' width=120 :visible='false' textAlign='Right' :isPrimaryKey='true' type='number'></e-column>
          <e-column field='ProductName' headerText='Products' width=160 :allowEditing='false'></e-column>
          <e-column field='Category' headerText='Category' width=140 :allowEditing='false'></e-column>
          <e-column field='SellingPrice' headerText='Price' width=130 format='C' textAlign='Right'></e-column>
          <e-column field='AvailableStock' headerText='In-Stock' width=120 textAlign='Right' :template="'availableStockTemplate'"></e-column>
          <e-column field='SoldStock' headerText='Sold' width=120 textAlign='Right' :template="'soldStockTemplate'"></e-column>
        </e-columns>
        <template v-slot:availableStockTemplate="{data}">
          <span>{{ data.AvailableStock }} {{ data.Unit }}</span>
        </template>
        <template v-slot:soldStockTemplate="{data}">
          <span>{{ data.SoldStock }} {{ data.Unit }}</span>
        </template>
      </ejs-grid>
    </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter, Sort } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

provide('grid', [Filter, Sort]);
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