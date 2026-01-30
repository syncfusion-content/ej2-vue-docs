<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule ref='scheduleObj' :height='height' :width='width' :selectedDate='selectedDate' :views='views'
        :eventSettings='eventSettings'>
        <template v-slot:tooltipTemplate="{ data }">
          <div class='tooltip-wrap'>
            <div class='content-area'>
              <div class='name'>{{ data.Subject }}></div>
              <div v-if='data.City !== null && data.City !== undefined' class='city'>{{ data.City }}</div>
              <div class='time'>From : {{ data.StartTime.toLocaleString() }} </div>
              <div class='time'>To : {{ data.EndTime.toLocaleString() }} </div>
            </div>
        </template>
      </ejs-schedule>
    </div>
  </div>
</template>

<script>
import { ScheduleComponent, TimelineViews, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
import { eventsData } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent
  },
  data() {
    return {
      height: '550px',
      width: '100%',
      views: ['TimelineDay', 'Week', 'WorkWeek', 'Month'],
      eventSettings: {
        dataSource: eventsData,
        enableTooltip: true,
        tooltipTemplate: "tooltipTemplate"
      },
      selectedDate: new Date(2018, 1, 15),
    }
  },
  provide: {
    schedule: [TimelineViews, Week, WorkWeek, Month]
  }
}
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
