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
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Week, View, Resize, DragAndDrop, ExcelExport } from "@syncfusion/ej2-vue-schedule";
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
}

const onExportClick = function () {
    let scheduleObj = ScheduleObj.value;
    let exportValues = {
        customData: [{
            Id: 1,
            Subject: 'Explosion of Betelgeuse Star',
            Location: 'Space Centre USA',
            StartTime: new Date(2019, 0, 6, 9, 30),
            EndTime: new Date(2019, 0, 6, 11, 0),
            CategoryColor: '#1aaa55'
        }, {
            Id: 2,
            Subject: 'Thule Air Crash Report',
            Location: 'Newyork City',
            StartTime: new Date(2019, 0, 7, 12, 0),
            EndTime: new Date(2019, 0, 7, 14, 0),
            CategoryColor: '#357cd2'
        }]
    };
    scheduleObj.exportToExcel(exportValues);
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-schedule/styles/tailwind3";

.excel-export.e-schedule .e-schedule-toolbar .e-icon-schedule-excel-export::before {
    content: '\e242';
}

.excel-export.e-schedule .e-schedule-toolbar .e-toolbar-item.e-today {
    display: none !important;
}
</style>
