<template>
    <div id="app">
        <div id="container">
            <ejs-schedule width="100%" height="550px" :eventSettings='eventSettings' :selectedDate='selectedDate'
                :actionBegin='onActionBegin'>
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
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-vue-schedule";
import { scheduleData } from './datasource.js';

const eventSettings = {
    dataSource: scheduleData
}
const selectedDate = new Date(2018, 1, 15)

const onActionBegin = function (args) {
    let weekEnds = [0, 6];
    if (args.requestType == 'eventCreate' && weekEnds.indexOf((args.data[0].StartTime).getDay()) >= 0) {
        args.cancel = true;
    }
}

provide('schedule', [Day, Week, WorkWeek, Month, Agenda]);
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';
</style>
