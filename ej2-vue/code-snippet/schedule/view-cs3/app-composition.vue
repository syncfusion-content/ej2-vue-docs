<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings'>
                <e-views>
                    <e-view option='Week' dateFormat='dd-MMM-yyyy'></e-view>
                    <e-view option='Month' :showWeekend='showWeekend' readonly=true></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { scheduleData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Week, Month } from '@syncfusion/ej2-vue-schedule';

const selectedDate = new Date(2018, 1, 15);
const eventSettings = { dataSource: scheduleData };
const showWeekend = false;

provide('schedule', [Week, Month]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css";
</style>
