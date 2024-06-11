<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='315'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' :valueAccessor='currencyFormatter' width=80></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=130 :valueAccessor='concatenateFields' ></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const currencyFormatter = function(field, data, column) {
        return '€' + data['Freight'];
    }
    const concatenateFields = function (field, data, column) {
        return data[field] + '-' + data['ShipRegion'];
    }
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>