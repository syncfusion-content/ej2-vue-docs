<template>
  <div id="app">
    <ejs-grid ref='Grid' :dataSource='data' :allowPaging='true' height='280px' :rowDataBound='rowDataBound'
      :selectionSettings='selectionOptions' :dataBound='dataBound'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' :isPrimaryKey='true' textAlign='Right' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=80></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Page } from "@syncfusion/ej2-vue-grids";
import { employeeData } from './datasource.js';
const Grid = ref(null);
const data = employeeData;
const selectionOptions = { type: 'Multiple' };
const selIndex = [];
const rowDataBound = (args) => {
  if (args.data['EmployeeID'] > 3) {
    selIndex.push(parseInt(args.row.getAttribute('aria-rowindex')));
  }
}
const dataBound = (args) => {
  if (this.selIndex.length) {
    Grid.value.selectRows(this.selIndex);
    selIndex = [];
  }
}
provide('grid', [Page]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>