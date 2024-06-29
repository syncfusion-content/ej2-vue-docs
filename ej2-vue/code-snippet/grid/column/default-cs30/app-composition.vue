<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='315px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120
                    hideAtMedia='(min-width: 700px)'>
                </e-column> // column visibility hide when browser screen width lessthan 700px;
                <e-column field='CustomerID' headerText='Customer ID' width=140 hideAtMedia='(max-width: 700px)'>
                </e-column> // column Visibility show when browser screen width 500px or less;
                <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120
                    hideAtMedia='(min-width: 500px)'>
                </e-column> // column visibility hide when browser screen width lessthan 500px;
                <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type='date'
                    width=140>
                </e-column> // it always shown
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
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