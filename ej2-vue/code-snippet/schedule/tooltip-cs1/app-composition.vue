<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule ref='scheduleObj' :height='height' :width='width' :selectedDate='selectedDate' :views='views'
        :eventSettings='eventSettings'>
        <template v-slot:tooltipTemplate="{ data }">
          <div class='tooltip-wrap'>
            <div class='content-area'>
              <div class='name'>{{ data.Subject }}></div>
              <div v-if='data.City !== null && data.City !== undefined' class='city'>{{ data.City }}</div>
              <div class='time'>From : {{ data.StartTime.toLocaleString() }} </div>
              <div class='time'>To : {{ data.EndTime.toLocaleString() }} </div>
            </div>
          </div>
        </template>
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
  enableTooltip: true,
  tooltipTemplate: "tooltipTemplate"
};
const selectedDate = new Date(2018, 1, 15);

provide('schedule', [TimelineViews, Week, WorkWeek, Month]);

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
