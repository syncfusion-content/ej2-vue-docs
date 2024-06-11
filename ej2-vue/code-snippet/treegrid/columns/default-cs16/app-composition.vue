<template>
<div id="app">
        <ejs-treegrid  :dataSource="data" childMapping='subtasks' :treeColumnIndex='1' height='315px'>
            <e-columns>
                <e-column field='orderID' headerText='Order ID' width=100 textAlign='Right'></e-column>
                <e-column field='orderName' headerText='Order Name'  :valueAccessor='orderFormatter' width=215></e-column>
                <e-column field='orderDate' headerText='Order Date' width=110 :format='formatOptions' type='date' textAlign='Right'></e-column>
                <e-column field='price' headerText='Price' width=100  :valueAccessor='currencyFormatter' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>
/* eslint-disable */

import { TreeGridComponent as EjsTreegrid, Page, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { formatData } from "./datasource.js";

const data = formatData;
const formatOptions = {type:'date', format:'dd/MM/yyyy'};

const currencyFormatter = function(field, data, column) {
    return '€' + data['price'];
};

const orderFormatter = function (field, data, column) {
    return data[field] + '-' + data['Category'];
};

</script>