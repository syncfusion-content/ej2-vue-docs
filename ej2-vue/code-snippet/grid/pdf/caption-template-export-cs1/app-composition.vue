<template>
    <ejs-grid id="CaptionTemplateGrid" ref="grid" :dataSource="data" :allowGrouping="true" :groupSettings="groupOptions"
    :allowPdfExport="true" :toolbar="toolbar" :toolbarClick="toolbarClick" :exportGroupCaption="exportGroupCaption" height=315>
        <e-columns>
            <e-column field="EmployeeID" headerText="Employee ID" width="120"></e-column>
            <e-column field="FirstName" headerText="Name" width="120"></e-column>
            <e-column field="City" headerText="City"></e-column>
            <e-column field="Title" headerText="Title" width="170"></e-column>
        </e-columns>
    </ejs-grid>
</template>

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Group, PdfExport, Toolbar } from '@syncfusion/ej2-vue-grids';
import { employeeData } from './datasource.js';
const grid = ref(null);
            const data = employeeData;
            const toolbar = ['PdfExport'];
            const groupOptions = { 
                columns: ['EmployeeID'],
                captionTemplate: '$;{field} - ${key}'
            }
            const toolbarClick = function (args) {
            if (args.item.id === 'CaptionTemplateGrid_pdfexport') {
                grid.value.grid.pdfExport();
            }
        }
        const exportGroupCaption = function(args) {
            args.captionText = args.data.field + ' - ' + args.data.key;
        }
    provide('grid',  [Group, PdfExport, Toolbar]);
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