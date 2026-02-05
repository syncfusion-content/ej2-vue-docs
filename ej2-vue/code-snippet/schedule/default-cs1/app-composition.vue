<template>
    <div id="app">
        <div id="container">
            <ejs-schedule width="100%" height="550px" :eventSettings='eventSettings' :selectedDate='selectedDate'>
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
    dataSource: scheduleData,
    fields: {
        subject: { name: 'Subject', validation: { required: true } },
        location: {
            name: 'Location', validation: {
                required: true,
                regex: ["^[a-zA-Z0-9- ]*$", 'Special character(s) not allowed in this field']
            }
        }
    }
}
const selectedDate = new Date(2018, 1, 15)

provide('schedule', [Day, Week, WorkWeek, Month, Agenda]);

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
