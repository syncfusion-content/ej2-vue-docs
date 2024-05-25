<template>
    <div id="app">
     <p id='message' style="color:red;textAlign:center">{{ message }}</p>
       <ejs-grid ref='grid' :dataSource="data" :allowReordering='true' height='315px' :enableHover='false'
         :columnDragStart="columnDragStart" :columnDrag="columnDrag" :columnDrop="columnDrop">
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipRegion' headerText='Ship Region' width=80></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=80></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Reorder } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
      const message = '';
  provide('grid',  [Reorder]);
  const columnDrop = function(args) {
    this.message = `columnDrop event triggered`;
    if (args.column.allowReordering == true) {
      grid.value.getColumnByField(args.column.field).customAttributes = {
        class: 'customcss',
      };
    }
    }
    const columnDragStart = function(args) {
    this.message = `columnDragStart event triggered`;
    if (args.column.field == 'OrderID') {
      grid.value.getColumnByField(args.column.field).allowReordering = false;
    }
    }
    const columnDrag = function(args) {
    var index = args.target.getAttribute('data-colIndex');
    if (index) {
    this.message = `columnDrag event is triggered. ` + args.column.headerText + ` column is dragged to index ` + index;
    }
    }
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
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind.css";
</style>