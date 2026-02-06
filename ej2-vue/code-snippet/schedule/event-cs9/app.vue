<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedDate' :eventSettings='eventSettings'></ejs-schedule>
    </div>
  </div>
</template>
<script>
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

let data = [{
  TravelId: 2,
  TravelSummary: 'Paris',
  DepartureTime: new Date(2018, 1, 15, 10, 0),
  ArrivalTime: new Date(2018, 1, 15, 12, 30),
  Source: 'London',
  Comments: 'Summer vacation planned for outstation.'
}];

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent
  },
  data() {
    return {
      height: '550px',
      eventSettings: {
        dataSource: data,
        fields: {
          id: 'TravelId',
          subject: { name: 'TravelSummary', title: 'Summary', default: 'Add Summary' },
          location: { name: 'Source', default: 'USA' },
          description: { name: 'Comments' },
          startTime: { name: 'DepartureTime' },
          endTime: { name: 'ArrivalTime' }
        }
      },
      selectedDate: new Date(2018, 1, 15),
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Agenda]
  }
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-calendars/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material3.css';
</style>
