

<template>
    <div id="app">
        <ejs-grid :dataSource='data' :allowSorting='true' :enablePersistence='true' :allowPaging='true' :allowFiltering='true' height='210px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn, Sort, Page, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { provide } from "vue";
provide('grid', [Sort, Page, Filter]);
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


