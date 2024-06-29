<template>
    <div id='app'>
        <ejs-grid :dataSource="data">
            <e-columns>
                <e-column v-for="column in columns" :field="column.field" :headerText="column.headerText"></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from '@syncfusion/ej2-vue-grids';
import { data } from './datasource';
const columns = [
    { field: 'OrderID', headerText: 'Order ID' },
    { field: 'CustomerID', headerText: 'Customer ID' },
    { field: 'Freight', headerText: 'Freight' },
    { field: 'ShipCountry', headerText: 'Ship Country' }
];
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