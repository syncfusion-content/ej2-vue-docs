<template>
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :afterServiceInvoke="afterServiceInvoke"> </ejs-pivotview>
    </div>
</template>
<script>
import { PivotViewComponent } from "@syncfusion/ej2-vue-pivotview";

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
                    { name: '[Measures].[Internet Sales Amount]', caption: 'Internet Sales Amount' }
                ]
            },
            height: 350
        }
    },
    methods: {
        afterServiceInvoke: function (args) {
            console.log(args.action);
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>