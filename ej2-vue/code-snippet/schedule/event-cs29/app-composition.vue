<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule ref='scheduleObj' :height='height' :width='width' :selectedDate='selectedDate' :views='views'
        :eventSettings='eventSettings' :eventRendered='onEventRendered'></ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';

const scheduleObj = ref(null);
const data = [{
  Id: 13,
  Subject: 'Myths of Andromeda Galaxy',
  StartTime: new Date(2018, 1, 16, 10, 30),
  EndTime: new Date(2018, 1, 16, 10, 40)
}, {
  Id: 14,
  Subject: 'Aliens vs Humans',
  StartTime: new Date(2018, 1, 15, 10, 0),
  EndTime: new Date(2018, 1, 15, 10, 20)
}];

const height = '550px';
const width = '100%';
const views = ['Day', 'Week', 'WorkWeek', 'Month'];
const eventSettings = {
  dataSource: data
};
const selectedDate = new Date(2018, 1, 15);

const onEventRendered = function (args) {
  let schedule = scheduleObj.value.ej2Instances;
  if (schedule.currentView !== 'Month') {
    let cellHeight = schedule.element.querySelector('.e-work-cells').offsetHeight;
    let appHeight = (args.data.EndTime.getTime() - args.data.StartTime.getTime()) / (60 * 1000) * (cellHeight * schedule.timeScale.slotCount) / schedule.timeScale.interval;
    args.element.style.height = appHeight + 'px';
  }
}

provide('schedule', [Day, Week, WorkWeek, Month]);

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
