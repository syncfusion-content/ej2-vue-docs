<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedDate' :allowResizing='allowResizing'
        :eventSettings='eventSettings'></ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month, Agenda, Resize } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

const height = '550px';
const allowResizing = false;
const eventSettings = { dataSource: scheduleData };
const selectedDate = new Date(2018, 1, 15);

provide('schedule', [Day, Week, WorkWeek, Month, Agenda, Resize]);

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
