<template>
    <div id="app">
        <ejs-grid :dataSource='data' :height='315'>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                <e-column field='Names.0.FirstName' headerText='First Name' width=120></e-column>
                <e-column field='Names.0.LastName' headerText='Last Name' width=120></e-column>
                <e-column field='Title' headerText='Title' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>