<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :rowAutoHeight='rowAutoHeight'
                :eventSettings='eventSettings'>
                <e-views>
                    <e-view option='TimelineYear' displayName='Horizontal Timeline Year'></e-view>
                    <e-view option='TimelineYear' displayName='Vertical Timeline Year' orientation='Vertical'></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, TimelineYear } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

const selectedDate = new Date(2018, 1, 15);
const rowAutoHeight = true;
const eventSettings = { dataSource: scheduleData };
const showWeekend = false;

provide('schedule', [TimelineYear]);

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
