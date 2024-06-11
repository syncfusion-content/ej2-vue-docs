<template>
  <div id="app">
    <div class="control-section">
      <ejs-tooltip ref="tooltip" :beforeRender="beforeRender" target=".e-headertext">
        <ejs-grid :dataSource="data">
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" width="120">
            </e-column>
            <e-column field="Freight" headerText="Freight" width="120" format="C2">
            </e-column>
            <e-column field="ShipName" headerText="Ship Name" width="150">
            </e-column>
            <e-column field="ShipCountry" headerText="Ship Country" width="120">
            </e-column>
            <e-column field="OrderDate" type="Date" headerText="Order Date" format="yMd" width="120">
            </e-column>
          </e-columns>
        </ejs-grid>
      </ejs-tooltip>
    </div>
  </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { TooltipComponent as EjsTooltip } from "@syncfusion/ej2-vue-popups";
import { data } from "./datasource.js";
import { ref } from "vue";
const tooltip = ref(null);
const columnDescriptions = {
  "ORDER ID": "A unique number assigned to each order.",
  "FREIGHT": "The cost of shipping the order.",
  "SHIP NAME": "The name of the person or company who will receive the shipment.",
  "SHIP COUNTRY": "The country to which the shipment will be sent.",
  "ORDER DATE": "The date when the order was placed.",
};
const beforeRender = function (args) {
  const description = columnDescriptions[args.target.innerText];
  if (description) {
    tooltip.value.ej2Instances.content =
      args.target.innerText + ": " + description;
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