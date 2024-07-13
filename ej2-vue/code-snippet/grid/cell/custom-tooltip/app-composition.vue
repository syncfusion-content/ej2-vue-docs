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
import { ref } from 'vue';
const tooltip = ref(null);
const beforeRender = function (args) {
  if (args.target.classList.contains('e-rowcell')) {
    tooltip.value.ej2Instances.content = 'The value is "' + args.target.innerText + '" ';
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
</style>