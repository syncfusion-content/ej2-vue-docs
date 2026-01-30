<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedDate' :views='views'
        :eventSettings='eventSettings' :allowOverlap="false"></ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import{ eventsData } from './datasource.js';
import { extend } from '@syncfusion/ej2-base';
import { ScheduleComponent as EjsSchedule, Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';

const height = '550px';
const views = ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'];
const eventSettings = {
  dataSource: extend([], eventsData, null, true)
};
const selectedDate = new Date(2025, 2, 6);

provide('schedule', [Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop]);

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css';
</style>
