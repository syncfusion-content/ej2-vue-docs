<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedDate' :views='views' :eventSettings='eventSettings'
        :timezoneDataSource='timezoneDataSource'></ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

let data = [{
  Id: 1,
  Subject: 'Explosion of Betelgeuse Star',
  StartTime: new Date(2020, 1, 15, 10, 0),
  EndTime: new Date(2018, 1, 15, 12, 30),
  IsAllDay: false
}, {
  Id: 2,
  Subject: 'Blue Moon Eclipse',
  StartTime: new Date(2020, 1, 16, 12, 0),
  EndTime: new Date(2018, 1, 16, 13, 0),
  IsAllDay: false
}];


const height = '550px';
const views = ['Day', 'Week', 'Month', 'Agenda'];
const eventSettings = { dataSource: data };
const timezoneDataSource = [
  { Value: 'Pacific/Niue', Text: 'Niue' },
  { Value: 'Pacific/Pago_Pago', Text: 'Pago Pago' },
  { Value: 'Pacific/Honolulu', Text: 'Hawaii Time' },
  { Value: 'Pacific/Rarotonga', Text: 'Rarotonga' },
  { Value: 'Pacific/Tahiti', Text: 'Tahiti' },
];
const selectedDate = new Date(2020, 1, 15);

provide('schedule', [Day, Week, Month, Agenda]);
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
</style>
