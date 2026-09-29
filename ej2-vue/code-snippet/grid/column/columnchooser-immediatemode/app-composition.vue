<template>
  <div id="app">
    <ejs-grid :dataSource="data" :showColumnChooser="true" :toolbar="toolbarOptions" :columnChooserSettings="columnChooserSettings" height="272px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
        <e-column field="CustomerName" headerText="Customer Name" width="150"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="130" format="yMd" textAlign="Right"></e-column>
        <e-column field="Freight" width="120" format="C2" textAlign="Right"></e-column>
        <e-column field="ShippedDate" headerText="Shipped Date" width="140" format="yMd" textAlign="Right"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, ColumnChooser, Toolbar } from "@syncfusion/ej2-vue-grids";
import { data as gridData } from './datasource.js';

const data = gridData;
const toolbarOptions = ['ColumnChooser'];
const columnChooserSettings = { mode: 'Immediate' };

provide('grid', [ColumnChooser, Toolbar]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>