
import Vue from 'vue';
import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
import { DatePickerPlugin } from '@syncfusion/ej2-vue-calendars';

let currentYear = new Date().getFullYear();
let data = [{
    Id: 1,
    Subject: 'Paris',
    StartTime: new Date(currentYear, 1, 15, 10, 0),
    EndTime: new Date(currentYear, 1, 15, 12, 30),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5'
}];

Vue.use(SchedulePlugin);
Vue.use(DatePickerPlugin);



new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <div class='date-picker-container'>
            <ejs-datepicker id='date-picker' placeholder='Selected date' floatLabelType="Always"  :value='selectedDate' :showClearButton='false' v-model='selectedDate'>
            </ejs-datepicker>
        </div>
        <div class="schedule-container">
            <ejs-schedule :height='height' :selectedDate='selectedDate' v-model='selectedDate' :eventSettings='eventSettings'></ejs-schedule>
        </div>
    </div>
  </div>
`,

  data (){
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

});