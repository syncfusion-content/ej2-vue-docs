<template>
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule ref="ScheduleObj" :cssClass="cssClass" height="550px" :selectedDate='selectedDate'
                    :eventSettings='eventSettings' :currentView="currentView" :actionBegin="onActionBegin">
                    <e-views>
                        <e-view option="Week"></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Week, Resize, DragAndDrop, ExcelExport } from "@syncfusion/ej2-vue-schedule";
import { scheduleData } from './datasource.js';

const ScheduleObj = ref(null);
const cssClass = 'excel-export';
const eventSettings = { dataSource: scheduleData };
const selectedDate = new Date(2019, 0, 10);
const currentView = 'Week'

provide('schedule', [Week, Resize, DragAndDrop, ExcelExport]);

const onActionBegin = function (args) {
    if (args.requestType === 'toolbarItemRendering') {
        let exportItem = {
            align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
            text: 'Excel Export', cssClass: 'e-excel-export', click: onExportClick
        };
        args.items.push(exportItem);
    }
};

const onExportClick = function () {
    let scheduleObj = ScheduleObj.value;
    let customFields = [
        { name: 'Subject', text: 'Summary' },
        { name: 'StartTime', text: 'First Date' },
        { name: 'EndTime', text: 'Last Date' },
        { name: 'Location', text: 'Place' },
        { name: 'OwnerId', text: 'Owners' }
    ];
    let exportValues = { fieldsInfo: customFields };
    scheduleObj.exportToExcel(exportValues);
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-schedule/styles/material.css";

.excel-export.e-schedule .e-schedule-toolbar .e-icon-schedule-excel-export::before {
    content: '\e242';
}

.excel-export.e-schedule .e-schedule-toolbar .e-toolbar-item.e-today {
    display: none !important;
}
</style>
