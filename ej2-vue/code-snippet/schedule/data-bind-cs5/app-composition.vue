<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule ref='scheduleObj' height='530px' :selectedDate='selectedDate' :eventSettings='eventSettings'
                :readOnly='readOnly' :actionFailure='onActionFailure'>
            </ejs-schedule>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DataManager } from '@syncfusion/ej2-data';
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

const scheduleObj = ref(null);
const dataManager = new DataManager({
    url: 'http://some.com/invalidUrl'
});

const selectedDate = new Date(2017, 5, 11);
const readOnly = true;
const eventSettings = { dataSource: dataManager };

const onActionFailure = function () {
    let span = document.createElement('span');
    let schedule = scheduleObj.value.ej2Instances;
    schedule.element.parentNode.insertBefore(span, schedule.element);
    span.style.color = '#FF0000'
    span.innerHTML = 'Server exception: 404 Not found';
}

provide('schedule', [Day, Week, WorkWeek, Month, Agenda]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";
</style>
