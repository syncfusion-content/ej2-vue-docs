<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='315px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' :format='numberFormatOptions'
                    width=150></e-column>
                <e-column field='OrderDate' headerText='Order Date' :format='dateFormatOptions' textAlign='Right'
                    width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const numberFormatOptions = {
    // Custom format for numeric columns
    format: '##.0000',
}
const dateFormatOptions = {
    // Custom format for date columns
    type: 'Date',
    format: "EEE, MMM d, 'yyyy",
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";</style>