<template>
    <div id="app">
    <ejs-tooltip ref="tooltip" target=".e-rowcell" :beforeRender="beforeRender">
      <ejs-grid ref="grid" :dataSource="data" height="315px">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
          <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="90"></e-column>
          <e-column field="ShipName" headerText="Ship Name" width="120"></e-column>
        </e-columns>
      </ejs-grid>
    </ejs-tooltip>
    </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { TooltipComponent as EjsTooltip } from "@syncfusion/ej2-vue-popups";
import { ref } from "vue";
const tooltip = ref(null);
      const beforeRender = function (args) {
        if (args.target.closest("td")) {
           tooltip.value.content = args.target.innerText;
        }
      }
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>