<template>
    <div id="app">
        <ejs-grid ref="grid" :dataSource="data" :allowPaging="true" :allowFiltering="true" :filterSettings="filterOptions" :dataBound="dataBound">
            <e-columns>
                <e-column field="InternalDocumentNo" headerText="InternalDocumentNo" width="180" isPrimaryKey="true" headerTextAlign="center">
                </e-column>
                <e-column field="DocumentNumber" headerText="DocumentNumber" width="180" headerTextAlign="center" :filter="filterOptions">
                </e-column>
                <e-column field="CustomerCode" headerText="CustomerCode" width="180" headerTextAlign="center">
                </e-column>
                <e-column field="WarehouseName" headerText="WarehouseName" width="180" isPrimaryKey="true" headerTextAlign="center">
                </e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Filter } from "@syncfusion/ej2-vue-grids";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
    data() {
        return {
            data: [
            {
                InternalDocumentNo: 84374,
                DocumentNumber: "SOV-7855",
                CustomerCode: "0500733131",
                WarehouseName: "Main Warehouse"
            },
            {
                InternalDocumentNo: 84372,
                DocumentNumber: "SOV-7853",
                CustomerCode: "0500733132",
                WarehouseName: "Main Warehouse"
            },
            {
                InternalDocumentNo: 84365,
                DocumentNumber: "SOV-7852",
                CustomerCode: "0500733131",
                WarehouseName: "Main Warehouse"
            },
            {
                InternalDocumentNo: 84358,
                DocumentNumber: "SOV-7850",
                CustomerCode: "0500733131",
                WarehouseName: "Main Warehouse",
            },
            {
                InternalDocumentNo: 84357,
                DocumentNumber: "SOV-7849",
                CustomerCode: "0500733131",
                WarehouseName: "Main Warehouse"
            }
            ],
            filterOptions: {
                operator: "contains",
            }
        };
    },
    methods: {
        dataBound: function () {
            var gridObj = this.$refs.grid.ej2Instances;
            Object.assign(gridObj.filterModule.filterOperators, {
                startsWith: "contains", // change the default operator as contains for string type column
            });
        }
    },
    provide: {
        grid: [Page, Filter]
    }
};
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