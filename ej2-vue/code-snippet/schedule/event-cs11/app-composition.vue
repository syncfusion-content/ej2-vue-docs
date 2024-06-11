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

let data = [{
  Id: 1,
  Subject: 'Rank 1',
  StartTime: new Date(2017, 9, 29, 10, 0),
  EndTime: new Date(2017, 9, 29, 11, 30),
  IsAllDay: false,
  RankId: '1'
}, {
  Id: 2,
  Subject: 'Rank 3',
  StartTime: new Date(2017, 9, 29, 10, 30),
  EndTime: new Date(2017, 9, 29, 12, 30),
  IsAllDay: false,
  RankId: '3'
}, {
  Id: 3,
  Subject: 'Rank 6',
  StartTime: new Date(2017, 9, 29, 7, 0),
  EndTime: new Date(2017, 9, 29, 14, 30),
  IsAllDay: false,
  RankId: '6'
}, {
  Id: 4,
  Subject: 'Rank 9',
  StartTime: new Date(2017, 9, 29, 11, 0),
  EndTime: new Date(2017, 9, 29, 15, 30),
  IsAllDay: false,
  RankId: '9'
}];

let comparerFun = (args) => {
  args.sort((event1, event2) => event1.RankId.localeCompare(event2.RankId, undefined, { numeric: true }));
  return args;
}

const height = '550px';
const eventSettings = {
  dataSource: data,
  sortComparer: comparerFun
};
const selectedDate = new Date(2017, 9, 29);

provide('schedule', [Day, Week, WorkWeek, Month, Agenda]);

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';
</style>
