<template>
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings'
                    :currentView='currentView' :workDays='workDays'>
                    <e-views>
                        <e-view option='Week'></e-view>
                        <e-view option='WorkWeek'></e-view>
                        <e-view option='Month'></e-view>
                        <e-view option='TimelineWeek'></e-view>
                        <e-view option='TimelineWorkWeek'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { scheduleData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Week, WorkWeek, Month, TimelineViews } from '@syncfusion/ej2-vue-schedule';


const selectedDate = new Date(2018, 1, 15);
const currentView = 'WorkWeek';
const workDays = [1, 3, 5];
const eventSettings = { dataSource: scheduleData };

provide('schedule', [Week, WorkWeek, Month, TimelineViews]);

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
