<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :views='views' :selectedDate='selectedDate'
        :eventSettings='eventSettings' :popupOpen='onPopupOpen'></ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { Internationalization } from '@syncfusion/ej2-base';
import { ScheduleComponent as EjsSchedule, Month } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

const height = '550px';
const width = '100%';
const views = ['Month'];
const eventSettings = {
  dataSource: scheduleData
};
const selectedDate = new Date(2018, 1, 15);

const onPopupOpen = function (args) {
  if (args.type === 'EventContainer') {
    let instance = new Internationalization();
    let date = instance.formatDate(args.data.date, { skeleton: 'MMMEd' });
    args.element.querySelector('.e-header-date').innerText = date;
    args.element.querySelector('.e-header-day').innerText = 'Event count: ' + args.data.event.length;
  }
}

provide('schedule', [Month]);

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

/* csslint ignore:start */
.e-schedule .e-more-popup-wrapper .e-header-date {
  font-size: 15px !important;
  max-width: 44% !important;
}

/* csslint ignore:end */
</style>
