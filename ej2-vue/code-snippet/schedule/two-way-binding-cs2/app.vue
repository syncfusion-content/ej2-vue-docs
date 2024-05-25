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

<script>
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';

let currentYear = new Date().getFullYear();
let data = [{
  Id: 1,
  Subject: 'Paris',
  StartTime: new Date(currentYear, 1, 15, 10, 0),
  EndTime: new Date(currentYear, 1, 15, 12, 30),
  IsAllDay: false,
  RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5'
}];

export default {
  name: "App",
  components: {
    "ejs-dropdownlist": DropDownListComponent,
    "ejs-schedule": ScheduleComponent
  },
  data() {
    return {
      height: '550px',
      currentView: 'Week',
      views: ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'],
      eventSettings: {
        dataSource: data
      },
      selectedDate: new Date(currentYear, 1, 15),
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Agenda]
  }
}

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

.drop-down-container {
  width: 20%;
  margin: auto;
}
</style>
