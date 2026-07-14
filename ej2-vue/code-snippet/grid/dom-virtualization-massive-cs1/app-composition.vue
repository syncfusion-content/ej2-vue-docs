<template>
  <div id="app">
    <ejs-grid :dataSource='data' :enableDomVirtualization='true' :domVirtualizationSettings='domVirtualizationSettings' height='500px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width='120'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width='150'></e-column>
        <e-column field='OrderDate' headerText='Order Date' width='150' format='yMd'></e-column>
        <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
        <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, DomVirtualization } from "@syncfusion/ej2-vue-grids";
import { generateLargeData } from "./datasource.js";

const data = generateLargeData(10000);
const domVirtualizationSettings = {
  virtualDomType: 'Row',
  rowBuffer: 5
};

provide('grid', [DomVirtualization]);
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
