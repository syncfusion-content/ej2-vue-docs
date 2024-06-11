<template>
  <div id='app'>
    <ejs-schedule height='550px' :selectedDate='selectedDate' :minDate='minDate' :maxDate='maxDate'
      :currentView='currentView'>
    </ejs-schedule>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { scheduleData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, Day, WorkWeek, Agenda, Month, Week } from '@syncfusion/ej2-vue-schedule';

const selectedDate = new Date(2018, 1, 17);
const minDate = new Date(2017, 4, 17);
const maxDate = new Date(2018, 5, 17);
const eventSettings = { dataSource: scheduleData };
const currentView = 'Month';

provide('schedule', [Day, WorkWeek, Agenda, Month, Week]);

</script>