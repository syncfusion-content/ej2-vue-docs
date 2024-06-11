<template>
    <ejs-grid id="CaptionTemplateGrid" ref="grid" :dataSource="data" :allowGrouping="true" :groupSettings="groupOptions"
    :allowExcelExport="true" :toolbar="toolbar" :toolbarClick="toolbarClick" :exportGroupCaption="exportGroupCaption" height=315>
        <e-columns>
            <e-column field="EmployeeID" headerText="Employee ID" width="120"></e-column>
            <e-column field="FirstName" headerText="Name" width="120"></e-column>
            <e-column field="City" headerText="City"></e-column>
            <e-column field="Title" headerText="Title" width="170"></e-column>
        </e-columns>
    </ejs-grid>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Group, ExcelExport, Toolbar } from '@syncfusion/ej2-vue-grids';
import { employeeData } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
    data: () => {
        return {
            data: employeeData,
            toolbar: ['ExcelExport'],
            groupOptions: { 
                columns: ['EmployeeID'],
                captionTemplate: '${field} - ${key}'
            }
        };
    },
    methods: {    
        toolbarClick: function (args) {
            if (args.item.id === 'CaptionTemplateGrid_excelexport') {
                this.$refs.grid.excelExport();
            }
        },
        exportGroupCaption: function(args) {
            args.captionText = args.data.field + ' - ' + args.data.key;
        }
    },
    provide: {
        grid: [Group, ExcelExport, Toolbar],
    },
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>