<template>
  <div id="app">
    <ejs-grid :dataSource="data" id="gridcomp" :allowPaging="true" :allowGrouping="true" :allowSorting="true"
    :showColumnMenu="true" :groupSettings="groupOptions" :allowFiltering="true" :filterSettings="filterSettings">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="90" textAlign="Right" :showColumnMenu="false"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="100"></e-column>
        <e-column field="Freight" headerText="Freight" format="C2" textAlign="Right" width="80"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="100"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Sort, Group, ColumnMenu, Page, Filter} from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

const groupOptions = { showGroupedColumn: true };
const filterSettings = { type: 'CheckBox' };

provide('grid',  [Sort, Group, ColumnMenu, Page, Filter]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>
