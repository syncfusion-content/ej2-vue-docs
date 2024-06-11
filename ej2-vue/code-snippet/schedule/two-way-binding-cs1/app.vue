<template>
  <div id='app'>
    <div id='container'>
      <div class='date-picker-container'>
        <ejs-datepicker id='date-picker' placeholder='Selected date' floatLabelType="Always" :value='selectedDate'
          :showClearButton='false' v-model='selectedDate'>
        </ejs-datepicker>
      </div>
      <div class="schedule-container">
        <ejs-schedule :height='height' :selectedDate='selectedDate' v-model='selectedDate'
          :eventSettings='eventSettings'></ejs-schedule>
      </div>
    </div>
  </div>
</template>

<script>
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-vue-calendars';

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
    "ejs-datepicker": DatePickerComponent,
    "ejs-schedule": ScheduleComponent
  },
  data() {
    return {
      height: '550px',
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

.date-picker-container {
  width: 20%;
  margin: auto;
}
</style>
