<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='290px' :allowPaging="true" :aggregates='aggregates'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='OrderDate' headerText='Order Date' format='yMd' width=120 type='date'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' format='yMd' width=120 type='date'></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' width=150></e-column>
                <e-column field='Verified' format='C2' width=150></e-column>
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
              type: 'Average',
              field: 'Freight',
              footerTemplate: 'Average: ${Average}',
              format: 'C2',
            },
            {
              type: 'Max',
              field: 'ShippedDate',
              footerTemplate: 'Max: ${new Date(Max).toLocaleDateString()}',
            },
            {
              type: 'Min',
              field: 'OrderDate',
              footerTemplate: 'Min: ${new Date(Min).toLocaleDateString()}',
            },
            {
              type: 'TrueCount',
              field: 'Verified',
              footerTemplate: 'True Count: ${TrueCount}',
            },
          ],
        },
      ];
  provide('grid', [Aggregate, Page]);
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