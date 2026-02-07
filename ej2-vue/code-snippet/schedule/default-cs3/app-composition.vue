<template>
    <div id="app">
        <div id="container">
            <ejs-schedule ref='scheduleObj' width="100%" height="550px" :eventSettings='eventSettings'
                :selectedDate='selectedDate' :workHours='workHours' :actionBegin='onActionBegin'>
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
import { scheduleData } from './datasource.js';

const scheduleObj = ref(null);
const eventSettings = {
    dataSource: scheduleData
}
const selectedDate = new Date(2018, 1, 15);
const workHours = {
    highlight: true,
    start: '11:00',
    end: '20:00'
}

provide('schedule', [Day, Week, WorkWeek, Month, Agenda]);
const onActionBegin = function (args) {
    if (args.requestType == 'eventChange') {
        let weekEnds = [0, 6];
        let weekDay = weekEnds.indexOf((args.data.StartTime).getDay()) >= 0;
        let workHours = (args.data.StartTime.getHours < parseInt(scheduleObj.value.workHours.start)) || (args.data.StartTime.getHours > parseInt(scheduleObj.value.workHours.end));
        if (weekDay || workHours) {
            args.cancel = true;
        }
    }
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material3.css';
</style>
