<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" allowPaging="true" 
     :selectionSettings="selectionOptions">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right">
        </e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="150">
        </e-column>
        <e-column type="date" field="OrderDate" headerText="Order Date" width="130" format="yMd" 
        textAlign="Right"></e-column>
        <e-column field="Freight" headerText="Freight" width="120" format="C2" 
        textAlign="Right"></e-column>
        <e-column type="date" field="ShippedDate" headerText="Shipped Date" width="130" 
        format="yMd" textAlign="Right"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
const selectionOptions = { allowColumnSelection: true, type: "Multiple" };
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