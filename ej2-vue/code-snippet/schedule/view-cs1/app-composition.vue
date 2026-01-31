<template>
  <div id='app'>
    <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings'>
      <e-views>
        <e-view option='Week' startHour='07:00' endHour='15:00'></e-view>
        <e-view option='WorkWeek' startHour='10:00' endHour='18:00'></e-view>
        <e-view option='Month' showWeekend=false></e-view>
      </e-views>
    </ejs-schedule>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { scheduleData } from './datasource.js';
import { extend } from '@syncfusion/ej2-base';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, WorkWeek, Month, Week } from '@syncfusion/ej2-vue-schedule';

const eventSettings = { dataSource: extend([], scheduleData, null, true) };
const selectedDate = new Date(2018, 1, 15);

provide('schedule', [WorkWeek, Month, Week]);

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
