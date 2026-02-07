<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedDate' :eventSettings='eventSettings'></ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

const data = [{
  Id: 1,
  Subject: 'Scrum Meeting',
  StartTime: new Date(2018, 0, 28, 10, 0),
  EndTime: new Date(2018, 0, 28, 12, 30),
  IsAllDay: false,
  RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=8',
  RecurrenceException: '20180130T043000Z'
},
{
  Id: 2,
  Subject: 'Scrum Meeting',
  StartTime: new Date(2018, 0, 30, 9, 0),
  EndTime: new Date(2018, 0, 30, 10, 30),
  Description: 'Meeting time changed based on team activities.',
  RecurrenceID: 1
}];

const height = '550px';
const eventSettings = {
  dataSource: data
};
const selectedDate = new Date(2018, 0, 28);

provide('schedule', [Day, Week, WorkWeek, Month, Agenda]);

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-calendars/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material3.css';
</style>
