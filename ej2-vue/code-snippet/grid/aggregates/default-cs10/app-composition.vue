<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='290px' :allowPaging="true" :aggregates='aggregates'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' width=80></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Aggregate, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
      const aggregates = [
      {
        columns: [
          {
            type: ['Sum', 'Max', 'Min'],
            field: 'Freight',
            columnName: 'Freight',
            format: 'C2',
            footerTemplate: 'Sum: ${Sum}, Min:${Min}, Max:${Max}',
          },
        ],
      },
    ];
  provide('grid', [Aggregate, Page])
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
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material3.css";
</style>