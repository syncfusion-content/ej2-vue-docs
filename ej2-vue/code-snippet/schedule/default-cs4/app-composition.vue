<template>
    <div id="app">
        <div id="container">
            <ejs-schedule ref='scheduleObj' width="100%" height="550px" :eventSettings='eventSettings'
                :selectedDate='selectedDate' :cellClick='onCellClick' :eventClick='onEventClick'
                :showQuickInfo='showQuickInfo'>
                <e-views>
                    <e-view option="Day"></e-view>
                    <e-view option="Week"></e-view>
                    <e-view option="WorkWeek"></e-view>
                    <e-view option="Month"></e-view>
                    <e-view option="Agenda"></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-vue-schedule";
import { schedulerData } from './datasource.js';

const scheduleObj = ref(null);

const eventSettings = {
    dataSource: schedulerData
}
const selectedDate = new Date(2021, 7, 15)
const showQuickInfo = false

provide('schedule', [Day, Week, WorkWeek, Month, Agenda]);
const onCellClick = function (args) {
    scheduleObj.value.openEditor(args, 'Add');
}
const onEventClick = function (args) {
    if (!args.event.RecurrenceRule) {
        scheduleObj.value.openEditor(args.event, 'Save');
    }
    else {
        scheduleObj.value.quickPopup.openRecurrenceAlert();
    }
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3';
</style>
