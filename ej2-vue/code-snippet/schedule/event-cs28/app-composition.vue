<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate' :views='views' cssClass='custom-class'
        :eventSettings='eventSettings'></ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

const height = '550px';
const width = '100%';
const views = ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'];
const eventSettings = {
  dataSource: scheduleData
};
const selectedDate = new Date(2018, 1, 15);

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

.custom-class.e-schedule .e-vertical-view .e-all-day-appointment-wrapper .e-appointment,
.custom-class.e-schedule .e-vertical-view .e-day-wrapper .e-appointment,
.custom-class.e-schedule .e-month-view .e-appointment {
  background: #006400;
}
</style>
