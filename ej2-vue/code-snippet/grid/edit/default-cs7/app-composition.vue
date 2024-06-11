<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' :editSettings='editSettings' :commandClick='commandClick' height='310px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width=150></e-column>
        <e-column headerText='Commands' width=150 :commands='commands'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit, CommandColumn } from "@syncfusion/ej2-vue-grids";
import { closest } from "@syncfusion/ej2-base";
import { data } from './datasource.js';
const editSettings = { allowEditing: true, allowDeleting: true };
const commands = [{ buttonOption: { content: 'Details', cssClass: 'e-flat' } }];
provide('grid', [Page, Edit, Toolbar, CommandColumn]);
const commandClick = function (args) {
  alert(JSON.stringify(args.rowData));
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>