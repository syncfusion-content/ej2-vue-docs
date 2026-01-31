<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule ref='scheduleObj' width='100%' height='550px' :selectedDate='selectedDate'
                :eventSettings='eventSettings' :actionBegin='onActionBegin'>
                <e-views>
                    <e-view option='Week'></e-view>
                    <e-view option='WorkWeek'></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { scheduleData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Week, WorkWeek } from '@syncfusion/ej2-vue-schedule';

const scheduleObj = ref(null);
const eventSettings = { dataSource: scheduleData };
const selectedDate = new Date(2018, 1, 15);

const onActionBegin = function (args) {
    if (args.requestType === 'eventCreate' && args.data.length > 0) {
        let eventData = args.data[0];
        let schedule = scheduleObj.value.ej2Instances;
        let eventField = schedule.eventFields;
        let startDate = eventData[eventField.startTime];
        let endDate = eventData[eventField.endTime];
        args.cancel = !schedule.isSlotAvailable(startDate, endDate);
    }
}

provide('schedule', [Week, WorkWeek]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3";
</style>
