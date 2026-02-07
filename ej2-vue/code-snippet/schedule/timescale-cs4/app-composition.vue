<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedData' :eventSettings='eventSettings'
        :showTimeIndicator='showTimeIndicator'>
        <e-views>
          <e-view option='Day'></e-view>
          <e-view option='Week'></e-view>
          <e-view option='WorkWeek'></e-view>
          <e-view option='TimelineDay'></e-view>
        </e-views>
      </ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Day, Week, WorkWeek, TimelineViews, View } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';
import { extend } from '@syncfusion/ej2-base';

const height = '550px';
const eventSettings = { dataSource: extend([], scheduleData, null, true) };
const selectedData = new Date(2018, 1, 15);
const showTimeIndicator = false;

provide('schedule', [Day, Week, WorkWeek, TimelineViews]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/material3.css";
</style>
