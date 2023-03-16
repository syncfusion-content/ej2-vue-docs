
  import Vue from 'vue';
  import { scheduleData } from './datasource.js';
  import { SchedulePlugin, Day, WorkWeek, Agenda, Month, Week } from '@syncfusion/ej2-vue-schedule';
  Vue.use(SchedulePlugin);
  
new Vue({
	el: '#app',
	template: `
    <div id='app'>
        <ejs-schedule height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings' :allowInline='allowInline' :currentView='currentView'>
        </ejs-schedule>
    </div>
`,

    data () {
      return {
        selectedDate: new Date(2018, 1, 17),
        allowInline: true,
        eventSettings: { dataSource: scheduleData },
        currentView: 'Month',
      }
    },
    provide: {
      schedule: [Day, WorkWeek, Agenda, Month, Week]
    }
  
});