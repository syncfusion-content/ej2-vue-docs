<template>
    <div id="app">
        <ejs-button id='reordersingle' cssClass='e-info' @click='reorderSingleColumnByTargetIndex'>Reorder single column</ejs-button>
        <ejs-button id='reordermultipe' cssClass='e-info' @click='reorderMultipleColumnByTargetIndex'>Reorder mutiple columns</ejs-button>
        <ejs-grid ref='grid' :dataSource="data" :allowReordering='true' height='315px'>
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
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
const grid = ref(null);
  provide('grid',  [Reorder]);
    const reorderSingleColumnByTargetIndex = function() {
      grid.value.reorderColumnByTargetIndex("OrderID", 3); // move column with field name "OrderID" to index 3
    }
    const reorderMultipleColumnByTargetIndex = function() {
      grid.value.reorderColumnByTargetIndex(['OrderID', 'CustomerID'], 3); // move columns with field name "OrderID" and "CustomerID" to index 3
    }
</script>
<style>
.e-btn.e-info, .e-css.e-btn.e-info {
    margin-right: 4px;
    margin-bottom: 3px;
}
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