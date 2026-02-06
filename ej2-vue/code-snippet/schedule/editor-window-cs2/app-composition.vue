<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate' :views='views'
        :eventSettings='eventSettings'></ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, TimelineViews, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';


const height = '550px';
const width = '100%';
const views = ['TimelineDay', 'Day', 'Week', 'Month', 'Agenda'];
const eventSettings = {
  dataSource: scheduleData,
  fields: {
    id: 'Id',
    subject: { name: 'Subject', title: 'Event Name' },
    location: { name: 'Location', title: 'Event Location' },
    description: { name: 'Description', title: 'Event Description' },
    startTime: { name: 'StartTime', title: 'Start Duration' },
    endTime: { name: 'EndTime', title: 'End Duration' }
  }
};
const selectedDate = new Date(2018, 1, 15);

provide('schedule', [Day, Week, TimelineViews, Month, Agenda]);


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
