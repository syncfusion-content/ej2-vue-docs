<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate' :eventSettings='eventSettings'
        :views='views' :startHour='startHour' :endHour='endHour' :headerRows='headerRows'></ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, TimelineViews } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';


const height = '550px';
const width = '100%';
const startHour = '09:00';
const endHour = '13:00';
const headerRows = [
  { option: 'Year' },
  { option: 'Month' },
  { option: 'Week' },
  { option: 'Date' },
  { option: 'Hour' }
];
const views = ['TimelineWeek'];
const selectedDate = new Date(2018, 11, 31);
const eventSettings = { dataSource: scheduleData };

provide('schedule', [TimelineViews]);


</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";
</style>
