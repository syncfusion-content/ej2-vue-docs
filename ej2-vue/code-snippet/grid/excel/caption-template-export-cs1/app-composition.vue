<template>
    <ejs-grid id="CaptionTemplateGrid" ref="grid" :dataSource="data" :allowGrouping="true" :groupSettings="groupOptions"
        :allowExcelExport="true" :toolbar="toolbar" :toolbarClick="toolbarClick" :exportGroupCaption="exportGroupCaption"
        height=315>
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
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Group, ExcelExport, Toolbar } from '@syncfusion/ej2-vue-grids';
import { employeeData } from './datasource.js';
const grid = ref(null);
const data = employeeData;
const toolbar = ['ExcelExport'];
const groupOptions = {
    columns: ['EmployeeID'],
    captionTemplate: '${field} - ${key}'
};
const toolbarClick = function (args) {
    if (args.item.id === 'CaptionTemplateGrid_excelexport') {
        grid.value.excelExport();
    }
}
const exportGroupCaption = function (args) {
    args.captionText = args.data.field + ' - ' + args.data.key;
}
provide('grid', [Group, ExcelExport, Toolbar]);
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>