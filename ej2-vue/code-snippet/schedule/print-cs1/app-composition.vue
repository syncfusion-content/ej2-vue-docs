<template>
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule ref="ScheduleObj" height="520px" :selectedDate='selectedDate'
                    :eventSettings='eventSettings' :actionBegin="onActionBegin">
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month, Agenda, Print } from "@syncfusion/ej2-vue-schedule";
import { scheduleData } from './datasource.js';

const ScheduleObj = ref(null);
const eventSettings = { dataSource: scheduleData };
const selectedDate = new Date(2018, 1, 15);
const cssClass = 'schedule-print';

provide('schedule', [Day, Week, WorkWeek, Month, Agenda, Print]);

const onActionBegin = function (args) {
    if (args.requestType === 'toolbarItemRendering') {
        let exportItem = {
            align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-print',
            text: 'Print', cssClass: 'e-print', click: onPrintIconClick
        };
        args.items.push(exportItem);
    }
};

const onPrintIconClick = function () {
    let scheduleObj = ScheduleObj.value;
    scheduleObj.print();
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

.e-schedule .e-schedule-toolbar .e-icon-schedule-print::before {
    content: '\e813';
}
</style>