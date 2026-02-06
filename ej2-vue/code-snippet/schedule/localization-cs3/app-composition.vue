<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :dateFormat='dateFormat' height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings'>
        <e-views>
          <e-view option='Day'></e-view>
          <e-view option='Week'></e-view>
          <e-view option='WorkWeek'></e-view>
          <e-view option='Month'></e-view>
        </e-views>
      </ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { scheduleData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';

const height = '550px';
const dateFormat = 'yyyy/MM/dd';
const selectedDate = new Date(2018, 0, 15);
const eventSettings = { dataSource: scheduleData };

provide('schedule', [Day, Week, WorkWeek, Month]);

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
