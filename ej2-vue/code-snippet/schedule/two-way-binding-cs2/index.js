
import Vue from 'vue';
import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';

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
Vue.use(DropDownListPlugin);



new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <div class='drop-down-container'>
            <ejs-dropdownlist id='current-view-drop-down' placeholder="Current view" floatLabelType="Always"  :dataSource='views' :value='currentView' v-model="currentView">
            </ejs-dropdownlist>
        </div>
        <div class="schedule-container">
            <ejs-schedule :height='height' :selectedDate='selectedDate' :currentView='currentView' v-model='currentView' :eventSettings='eventSettings'></ejs-schedule>
        </div>
    </div>
  </div>
`,

  data (){
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

});