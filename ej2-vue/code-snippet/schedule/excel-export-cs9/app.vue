<template>
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule ref="ScheduleObj" :cssClass="cssClass" height="550px" 
                    :selectedDate='selectedDate' :eventSettings='eventSettings' 
                    :currentView="currentView" :actionBegin="onActionBegin" :excelExport="onExcelExport">
                    <e-views>
                        <e-view option="Week"></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, provide } from "vue";
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, 
         Week, Resize, DragAndDrop, ExcelExport } from "@syncfusion/ej2-vue-schedule";
import { scheduleData } from './datasource.js';

const ScheduleObj = ref(null);
const cssClass = 'excel-export';
const eventSettings = { dataSource: scheduleData };
const selectedDate = new Date(2025, 0, 8);
const currentView = 'Week';

provide('schedule', [Week, Resize, DragAndDrop, ExcelExport]);

const onActionBegin = (args) => {
    if (args.requestType === 'toolbarItemRendering') {
        let exportItem = {
            align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icons e-export-excel',
            text: 'Excel Export', cssClass: 'e-excel-export', click: onExportClick
        };
        args.items.push(exportItem);
    }
};

const onExcelExport = (args) => {
    const worksheet = args.worksheets[0];
    worksheet.rows.unshift({
        index: 1,
        cells: [
            {
                index: 1,
                value: 'Sales Report',
                colSpan: worksheet.columns.length,
                style: {
                    bold: true,
                    fontSize: 18,
                    hAlign: 'Center',
                    fill: { color: '#1E90FF' },
                    color: '#FFFFFF',
                },
            },
        ],
    });
    worksheet.rows.unshift({
        index: 2,
        cells: [
            {
                index: 1,
                value: 'Generated on: ' + new Date().toLocaleDateString(),
                colSpan: worksheet.columns.length,
                style: {
                    italic: true,
                    fontSize: 12,
                    hAlign: 'Left',
                    fill: { color: '#D3D3D3' },
                },
            },
        ],
    });
    worksheet.rows.forEach((row, idx) => {
        row.index = idx + 1;
      });
    worksheet.rows.push({
        index: worksheet.rows.length + 1,
        cells: [
            {
                index: 1,
                value: 'End of Report',
                colSpan: worksheet.columns.length,
                style: {
                    bold: true,
                    fontSize: 14,
                    hAlign: 'Center',
                    fill: { color: '#FFD700' },
                },
            },
        ],
    });
};

const onExportClick = () => {
    let scheduleObj = ScheduleObj.value;
    let exportFields = [
        { name: 'Id', text: 'Id' },
        { name: 'Subject', text: 'Summary' },
        { name: 'StartTime', text: 'Start Date' },
        { name: 'EndTime', text: 'End Date' },
        { name: 'Location', text: 'Place' }
    ];
    let exportValues = { fieldsInfo: exportFields };
    scheduleObj.exportToExcel(exportValues);
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-schedule/styles/material3.css";

.excel-export.e-schedule .e-schedule-toolbar .e-icon-schedule-excel-export::before {
    content: '\e242';
}

.excel-export.e-schedule .e-schedule-toolbar .e-toolbar-item.e-today {
    display: none !important;
}
</style>
