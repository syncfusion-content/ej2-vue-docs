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
  TravelId: 2,
  TravelSummary: 'Paris',
  DepartureTime: new Date(2018, 1, 15, 10, 0),
  ArrivalTime: new Date(2018, 1, 15, 12, 30),
  FullDay: false,
  Source: 'London',
  Comments: 'Summer vacation planned for outstation.',
  Origin: 'Asia/Yekaterinburg',
  Destination: 'Asia/Yekaterinburg'
},{
    TravelId: 1,
    TravelSummary: "Tokyo",
    DepartureTime: new Date(2018, 1, 16, 10, 0, 0),
    ArrivalTime: new Date(2018, 1, 16, 12, 30, 0),
    FullDay: false,
    Source: "Beijing",
    Comments: "Conference on emerging technologies.",
    Origin: "Asia/Yekaterinburg",
    Destination: "Asia/Yekaterinburg",
    IsDisabled: true
  }];


const height = '550px';
const eventSettings = {
  dataSource: data,
  fields: {
    id: 'TravelId',
    subject: { name: 'TravelSummary' },
    isAllDay: { name: 'FullDay' },
    location: { name: 'Source' },
    description: { name: 'Comments' },
    startTime: { name: 'DepartureTime' },
    endTime: { name: 'ArrivalTime' },
    startTimezone: { name: 'Origin' },
    endTimezone: { name: 'Destination' },
    isBlock: 'IsDisabled',
  }
};
const selectedDate = new Date(2018, 1, 15);

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
