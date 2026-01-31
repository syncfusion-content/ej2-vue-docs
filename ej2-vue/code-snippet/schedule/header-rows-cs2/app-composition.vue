<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate' :eventSettings='eventSettings'
        :views='views' :currentView='currentView' :headerRows='headerRows'></ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, TimelineMonth } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

const width = '100%';
const height = '550px';
const selectedDate = new Date(2018, 11, 31);
const headerRows = [{ option: 'Year' }, { option: 'Month' }];
const currentView = 'TimelineMonth';
const views = [{ option: 'TimelineMonth', interval: 24 }];
const eventSettings = { dataSource: scheduleData };

provide('schedule', [TimelineMonth]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css";
</style>
