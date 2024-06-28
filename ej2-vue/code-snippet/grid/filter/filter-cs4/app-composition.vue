<template>
    <div id="app">
        <ejs-grid :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' height='273px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
      const filterOptions = {
            type:'Excel',
            columns: [
                {
                    field: 'CustomerID',
                    matchCase: false,
                    operator: 'startswith',
                    predicate: 'or',
                    value: 'VINET',
                },
                {
                    field: 'CustomerID',
                    matchCase: false,
                    operator: 'startswith',
                    predicate: 'or',
                    value: 'HANAR',
                },
                {
                    field: 'OrderID',
                    matchCase: false,
                    operator: 'lessThan',
                    predicate: 'or',
                    value: 10250,
                },
                {
                    field: 'OrderID',
                    matchCase: false,
                    operator: 'notEqual',
                    predicate: 'or',
                    value: 10262,
                },
            ]
      };
  provide('grid',  [Filter]);
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