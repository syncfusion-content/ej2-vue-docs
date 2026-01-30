<template>
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showFieldList="showFieldList" :allowCalculatedField="allowCalculatedField">
        </ejs-pivotview>
    </div>
</template>
<script>
import { PivotViewComponent, FieldList, CalculatedField } from "@syncfusion/ej2-vue-pivotview";

export default {
    name: "App",
    components: {
        "ejs-pivotview": PivotViewComponent
    },
    data() {
        return {
            dataSourceSettings: {
                catalog: 'Adventure Works DW 2008 SE',
                cube: 'Adventure Works',
                providerType: 'SSAS',
                enableSorting: true,
                url: 'https://bi.syncfusion.com/olap/msmdpump.dll',
                localeIdentifier: 1033,
                rows: [
                    { name: '[Customer].[Customer Geography]', caption: 'Customer Geography' },
                ],
                columns: [
                    { name: '[Product].[Product Categories]', caption: 'Product Categories' },
                    { name: '[Measures]', caption: 'Measures' },
                ],
                values: [
                    { name: '[Measures].[Customer Count]', caption: 'Customer Count' },
                    { name: '[Measures].[Internet Sales Amount]', caption: 'Internet Sales Amount' },
                    { name: 'Order on Discount', isCalculatedField: true }
                ],
                filters: [
                    { name: '[Date].[Fiscal]', caption: 'Date Fiscal' },
                ],
                calculatedFieldSettings: [
                    {
                        name: 'BikeAndComponents',
                        formula: '([Product].[Product Categories].[Category].[Bikes] + [Product].[Product Categories].[Category].[Components] )',
                        hierarchyUniqueName: '[Product].[Product Categories]',
                        formatString: 'Standard'
                    },
                    {
                        name: 'Order on Discount',
                        formula: '[Measures].[Order Quantity] + ([Measures].[Order Quantity] * 0.10)',
                        formatString: 'Currency'
                    }
                ],
                filterSettings: [
                    {
                        name: '[Date].[Fiscal]', items: ['[Date].[Fiscal].[Fiscal Quarter].&[2002]&[4]',
                            '[Date].[Fiscal].[Fiscal Year].&[2005]'],
                        levelCount: 3
                    }
                ]
            },
            height: 350,
            showFieldList: true,
            allowCalculatedField: true
        }
    },
    provide: {
        pivotview: [FieldList, CalculatedField]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>