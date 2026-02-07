<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate' :eventSettings='eventSettings'
        :views='views'>
        <e-header-rows>
          <e-header-row option="Month" :template="'monthHeaderTemplate'"></e-header-row>
          <template v-slot:monthHeaderTemplate="{ data }">
            <span class="month">{{ getMonthDetails(data) }}</span>
          </template>
          <e-header-row option="Week" :template="'weekHeaderTemplate'"></e-header-row>
          <template v-slot:weekHeaderTemplate="{ data }">
            <span class="week">{{ getWeekDetails(data) }}</span>
          </template>
          <e-header-row option="Week" :template="'yearHeaderTemplate'"></e-header-row>
          <template v-slot:yearHeaderTemplate="{ data }">
            <span class="year">{{ getYearDetails(data) }}</span>
          </template>
        </e-header-rows>
      </ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, HeaderRowsDirective as EHeaderRows, HeaderRowDirective as EHeaderRow, TimelineMonth, getWeekNumber } from '@syncfusion/ej2-vue-schedule';
import { Internationalization } from '@syncfusion/ej2-base';
import { eventData } from './datasource.js';

var instance = new Internationalization();

const width = '100%';
const height = '550px';
const selectedDate = new Date(2018, 0, 1);
const views = [{ option: 'TimelineMonth' }];
const eventSettings = { dataSource: eventData }

provide('schedule', [TimelineMonth]);
const getWeekDetails = function (value) {
  return 'Week: ' + getWeekNumber(value.date);
}
const getMonthDetails = function (value) {
  return 'Month ' + instance.formatDate(value.date, { skeleton: 'M' });
}
const getYearDetails = function (value) {
  return 'Year: ' + instance.formatDate(value.date, { skeleton: 'y' });
}

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
