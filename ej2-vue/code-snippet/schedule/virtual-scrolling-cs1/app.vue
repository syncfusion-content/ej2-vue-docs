<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate' :eventSettings='eventSettings'
        :enableAllDayScroll='enableAllDayScroll'></ejs-schedule>
    </div>
  </div>
</template>
<script>
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, DragAndDrop } from '@syncfusion/ej2-vue-schedule';
import { generateObject } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent
  },
  data() {
    return {
      height: '550px',
      width: '100%',
      eventSettings: { dataSource: generateObject() },
      selectedDate: new Date(2021, 3, 28),
      enableAllDayScroll: true
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Agenda, DragAndDrop]
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
