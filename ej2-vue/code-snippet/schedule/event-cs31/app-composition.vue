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
import { ScheduleComponent as EjsSchedule, Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';

const data = [{
  Id: 1,
  Subject: 'Explosion of Betelgeuse Star',
  StartTime: new Date(2018, 1, 15, 9, 30),
  EndTime: new Date(2018, 1, 15, 11, 0),
  RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5',
  IsBlock: true
}, {
  Id: 2,
  Subject: 'Thule Air Crash Report',
  StartTime: new Date(2018, 1, 14, 12, 0),
  EndTime: new Date(2018, 1, 14, 14, 0)
}];

const height = '550px';
const width = '100%';
const views = ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'];
const eventSettings = {
  dataSource: data
};
const selectedDate = new Date(2018, 1, 15);

provide('schedule', [Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop]);

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
