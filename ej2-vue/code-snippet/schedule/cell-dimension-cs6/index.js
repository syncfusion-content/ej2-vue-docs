
  import Vue from 'vue';
  import { scheduleData } from './datasource.js';
  import { SchedulePlugin, Day, WorkWeek, Agenda, Month, Week } from '@syncfusion/ej2-vue-schedule';
  Vue.use(SchedulePlugin);
  
new Vue({
	el: '#app',
	template: `
    <div id='app'>
        <ejs-schedule height='550px' :selectedDate='selectedDate' :minDate='minDate' :maxDate='maxDate' :currentView='currentView'>
        </ejs-schedule>
    </div>
`,

    data () {
      return {
        selectedDate: new Date(2018, 1, 17),
        minDate: new Date(2017, 4, 17),
        maxDate: new Date(2018, 5, 17)
        eventSettings: { dataSource: scheduleData },
        currentView: 'Month',
      }
    },
    provide: {
      schedule: [Day, WorkWeek, Agenda, Month, Week]
    }
  
});