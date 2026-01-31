<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :views='views' :selectedDate='selectedDate'
        :currentView='currentView' :eventSettings='eventSettings' :moreEventsClick='onMoreEventsClick'>
      </ejs-schedule>
    </div>
  </div>
</template>
<script>
import { ScheduleComponent, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent
  },
  data() {
    return {
      height: '550px',
      width: '100%',
      currentView: 'Month',
      views: ['Day', 'Week', 'WorkWeek', 'Month'],
      eventSettings: {
        dataSource: scheduleData
      },
      selectedDate: new Date(2018, 1, 15),
    }
  },
  methods: {
    onMoreEventsClick: function (args) {
      args.isPopupOpen = false;
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css";
</style>
