<template>
  <div id='app'>
    <ejs-schedule height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings' :allowInline='allowInline'
      :currentView='currentView'>
    </ejs-schedule>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { scheduleData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, Day, WorkWeek, Agenda, Month, Week } from '@syncfusion/ej2-vue-schedule';

const selectedDate = new Date(2018, 1, 17);
const allowInline = true;
const eventSettings = { dataSource: scheduleData };
const currentView = 'Month';

provide('schedule', [Day, WorkWeek, Agenda, Month, Week]);

</script>