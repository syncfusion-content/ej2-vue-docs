<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule ref='scheduleObj' :height='height' :width='width' :selectedDate='selectedDate' :views='views'
        :eventSettings='eventSettings' :tooltipOpen="onTooltipOpen">
      </ejs-schedule>
    </div>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, TimelineViews, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
import { eventsData } from './datasource.js';

const height = '550px';
const width = '100%';
const views = ['TimelineDay', 'Week', 'WorkWeek', 'Month'];
const eventSettings = {
  dataSource: eventsData,
  enableTooltip: true
};
const onTooltipOpen = function (args) => {
  if (args.data.Subject === "Vacation") {
    args.cancel = true;
  }
};
const selectedDate = new Date(2025, 1, 15);
provide('schedule', [TimelineViews, Week, WorkWeek, Month]);

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
