<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedData' :eventSettings='eventSettings'></ejs-schedule>
    </div>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

const scheduleData = [{
  Id: 1,
  Subject: 'Explosion of Betelgeuse Star',
  StartTime: new Date(2018, 1, 15, 9, 30),
  EndTime: new Date(2018, 1, 15, 11, 0)
}, {
  Id: 2,
  Subject: 'Thule Air Crash Report',
  StartTime: new Date(2018, 1, 12, 12, 0),
  EndTime: new Date(2018, 1, 12, 14, 0)
}, {
  Id: 3,
  Subject: 'Blue Moon Eclipse',
  StartTime: new Date(2018, 1, 13, 9, 30),
  EndTime: new Date(2018, 1, 13, 11, 0)
}, {
  Id: 4,
  Subject: 'Meteor Showers in 2018',
  StartTime: new Date(2018, 1, 14, 13, 0),
  EndTime: new Date(2018, 1, 14, 14, 30)
}];

const height = '550px';
const eventSettings = {
  dataSource: scheduleData
}
const selectedData = new Date(2018, 1, 15);

provide('schedule', [Day, Week, WorkWeek, Month, Agenda]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/material3.css";
</style>
