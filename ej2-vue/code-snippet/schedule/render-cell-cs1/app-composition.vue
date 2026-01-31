<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedData' :eventSettings='eventSettings' :views='views'
        :renderCell='onRenderCell'>
      </ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, Month } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

const height = '550px';
const width = '100%';
const eventSettings = { dataSource: scheduleData };
const selectedData = new Date(2018, 1, 15);
const views = ['Month'];
const currentView = 'Month';

const onRenderCell = function (args) {
  if (args.elementType === 'monthCells') {
    let ele = document.createElement('div');
    ele.innerHTML = getWeather(args.date);
    (args.element).appendChild(ele.firstChild);
  }
}
const getWeather = function (value) {
  switch (value.getDay()) {
    case 0:
      return '<div class="weather-text">25°C</div>';
    case 1:
      return '<div class="weather-text">18°C</div>';
    case 2:
      return '<div class="weather-text">10°C</div>';
    case 3:
      return '<div class="weather-text">16°C</div>';
    case 4:
      return '<div class="weather-text">8°C</div>';
    case 5:
      return '<div class="weather-text">27°C</div>';
    case 6:
      return '<div class="weather-text">17°C</div>';
    default:
      return null;
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

.weather-text {
  float: right;
  margin: -20px 12px 0 0;
  width: 20px;
  height: 20px;
}
</style>
