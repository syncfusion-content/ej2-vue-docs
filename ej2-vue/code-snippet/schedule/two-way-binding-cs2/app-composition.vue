<template>
  <div id='app'>
    <div id='container'>
      <div class='drop-down-container'>
        <ejs-dropdownlist id='current-view-drop-down' placeholder="Current view" floatLabelType="Always"
          :dataSource='views' :value='currentView' v-model="currentView">
        </ejs-dropdownlist>
      </div>
      <div class="schedule-container">
        <ejs-schedule :height='height' :selectedDate='selectedDate' :currentView='currentView' v-model='currentView'
          :eventSettings='eventSettings'></ejs-schedule>
      </div>
    </div>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
import { DropDownListComponent as EjsDropdownlist } from '@syncfusion/ej2-vue-dropdowns';

let currentYear = new Date().getFullYear();
let data = [{
  Id: 1,
  Subject: 'Paris',
  StartTime: new Date(currentYear, 1, 15, 10, 0),
  EndTime: new Date(currentYear, 1, 15, 12, 30),
  IsAllDay: false,
  RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5'
}];

const height = '550px';
const currentView = 'Week';
const views = ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'];
const eventSettings = {
  dataSource: data
};
const selectedDate = new Date(currentYear, 1, 15);

provide('schedule', [Day, Week, WorkWeek, Month, Agenda]);

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3';

.drop-down-container {
  width: 20%;
  margin: auto;
}
</style>
