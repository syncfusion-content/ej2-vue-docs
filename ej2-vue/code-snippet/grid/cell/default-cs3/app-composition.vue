<template>
    <div id="app">
        <ejs-grid :dataSource="data" height='315' :selectionSettings='selectionOptions'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=90></e-column>
            <e-column field='ShipName' headerText='Ship Name' textAlign='Right' width=120 > </e-column>          </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

      const selectionOptions = { type: 'Multiple', mode: 'Cell' };
</script>
<style>
  .e-grid td.e-cellselectionbackground {
    background: #9ac5ee;
    font-style: italic;
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
</style>