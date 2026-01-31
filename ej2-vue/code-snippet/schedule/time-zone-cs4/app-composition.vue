<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedDate' :eventSettings='eventSettings'>
        <e-views>
          <e-view option='Day'></e-view>
          <e-view option='Week'></e-view>
          <e-view option='TimelineWeek'></e-view>
          <e-view option='Month'></e-view>
          <e-view option='Agenda'></e-view>
        </e-views>
      </ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Day, Week, TimelineViews, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

let data = [{
  Id: 1,
  Subject: 'Paris',
  StartTime: new Date(2018, 1, 15, 10, 0),
  EndTime: new Date(2018, 1, 15, 12, 30),
  StartTimezone: 'Europe/Moscow',
  EndTimezone: 'Europe/Moscow'
}];

const height = '550px';
const selectedDate = new Date(2018, 1, 15);
const eventSettings = {
  dataSource: data
};

provide('schedule', [Day, Week, TimelineViews, Month, Agenda]);

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
