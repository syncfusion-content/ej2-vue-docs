
  import Vue from 'vue';
  import { scheduleData } from './datasource.js';
  import { extend } from '@syncfusion/ej2-base';
  import { SchedulePlugin,  WorkWeek, Month, Week } from '@syncfusion/ej2-vue-schedule';
  Vue.use(SchedulePlugin);
  
new Vue({
	el: '#app',
	template: `
  <div id='app'>
      <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate'
      :eventSettings= 'eventSettings'>
        <e-views>
          <e-view option='Week' startHour='07:00' endHour='15:00' ></e-view>
          <e-view option='WorkWeek' startHour='10:00' endHour='18:00' ></e-view>
          <e-view option='Month' showWeekend=false></e-view>
        </e-views>
      </ejs-schedule>
  </div>
`,

    data () {
      return {
        eventSettings: { dataSource: extend([], scheduleData, null, true) },
        selectedDate: new Date(2018, 1, 15)
      }
    },
    provide: {
      schedule: [ WorkWeek, Month, Week]
    }
  
});