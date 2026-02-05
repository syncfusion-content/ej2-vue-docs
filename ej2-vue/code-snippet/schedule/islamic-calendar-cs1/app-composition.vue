<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule height="550px" width="100%" :enableRtl='enableRtl' calendarMode='Islamic'>
            </ejs-schedule>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { loadCldr, setCulture, L10n } from '@syncfusion/ej2-base';
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth, Resize, DragAndDrop, MonthAgenda } from "@syncfusion/ej2-vue-schedule";
import { Calendar, Islamic } from '@syncfusion/ej2-calendars';
import { scheduleData } from './datasource.js';
import * as localeText from './locale.json';
import arNumberData from '@syncfusion/ej2-cldr-data/main/ar/numbers.json';
import artimeZoneData from '@syncfusion/ej2-cldr-data/main/ar/timeZoneNames.json';
import arGregorian from '@syncfusion/ej2-cldr-data/main/ar/ca-gregorian.json';
import arIslamic from '@syncfusion/ej2-cldr-data/main/ar/ca-islamic.json';
import arNumberingSystem from '@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json';

Calendar.Inject(Islamic);
L10n.load(localeText);
loadCldr(arNumberData, artimeZoneData, arGregorian, arIslamic, arNumberingSystem);
setCulture('ar');

const selectedDate = new Date(2018, 1, 15);
const eventSettings = { dataSource: scheduleData };
const enableRtl = true;
const views = [
    { option: 'Day' },
    { option: 'TimelineDay' },
    { option: 'Week' },
    { option: 'TimelineWeek' },
    { option: 'Month' },
    { option: 'TimelineMonth' },
    { option: 'Agenda' },
    { option: 'MonthAgenda' }
];

provide('schedule', [Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth, Resize, DragAndDrop, MonthAgenda]);

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
