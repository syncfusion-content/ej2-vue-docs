<template>
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showFieldList="showFieldList">
        </ejs-pivotview>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, FieldList } from "@syncfusion/ej2-vue-pivotview";

const dataSourceSettings = {
    catalog: 'Adventure Works DW 2008 SE',
    cube: 'Adventure Works',
    providerType: 'SSAS',
    enableSorting: true,
    url: 'https://bi.syncfusion.com/olap/msmdpump.dll',
    localeIdentifier: 1033,
    rows: [
        { name: '[Customer].[Customer Geography]', caption: 'Customer Geography' },
        { name: '[Measures]', caption: 'Measures' },
    ],
    columns: [
        { name: '[Product].[Product Categories]', caption: 'Product Categories' },
    ],
    values: [
        { name: '[Measures].[Customer Count]', caption: 'Customer Count' },
        { name: '[Measures].[Internet Sales Amount]', caption: 'Internet Sales Amount' }
    ],
    filters: [
        { name: '[Date].[Fiscal]', caption: 'Date Fiscal' },
    ],
    filterSettings: [
        {
            name: '[Date].[Fiscal]', items: ['[Date].[Fiscal].[Fiscal Quarter].&[2002]&[4]',
                '[Date].[Fiscal].[Fiscal Year].&[2005]'],
            levelCount: 3
        }
    ]
};
const height = 350;
const showFieldList = true;

provide('pivotview', [FieldList]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>