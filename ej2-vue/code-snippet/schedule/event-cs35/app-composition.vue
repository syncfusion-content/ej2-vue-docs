<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule ref='scheduleObj' :height='height' :width='width' :selectedDate='selectedDate' :views='views'
        cssClass='custom-class' :eventSettings='eventSettings' :eventRendered='onEventRendered'></ejs-schedule>
    </div>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

const scheduleObj = ref(null);
const height = '550px';
const width = '100%';
const views = ['Day', 'Week', 'WorkWeek', 'Month'];
const eventSettings = {
  dataSource: scheduleData
};
const selectedDate = new Date(2018, 1, 15);

const isReadOnly = function (data) {
  return (data.EndTime < scheduleObj.value.ej2Instances.selectedDate);
}
const onEventRendered = function (args) {
  if (isReadOnly(args.data)) {
    args.element.classList.add('e-past-app');
  }
}

provide('schedule', [Day, Week, WorkWeek, Month]);

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

.custom-class.e-schedule .e-vertical-view .e-day-wrapper .e-appointment.e-past-app {
  background-color: #D2691E;
}
</style>
