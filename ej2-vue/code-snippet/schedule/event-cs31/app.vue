<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate' :views='views'
        :eventSettings='eventSettings'></ejs-schedule>
    </div>
  </div>
</template>
<script>
import { ScheduleComponent, Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';

const data = [{
  Id: 1,
  Subject: 'Explosion of Betelgeuse Star',
  StartTime: new Date(2018, 1, 15, 9, 30),
  EndTime: new Date(2018, 1, 15, 11, 0),
  RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5',
  IsBlock: true
}, {
  Id: 2,
  Subject: 'Thule Air Crash Report',
  StartTime: new Date(2018, 1, 14, 12, 0),
  EndTime: new Date(2018, 1, 14, 14, 0)
}];

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent
  },
  data() {
    return {
      height: '550px',
      width: '100%',
      views: ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'],
      eventSettings: {
        dataSource: data
      },
      selectedDate: new Date(2018, 1, 15),
    }
  },
  provide: {
    schedule: [Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop]
  }
}
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
