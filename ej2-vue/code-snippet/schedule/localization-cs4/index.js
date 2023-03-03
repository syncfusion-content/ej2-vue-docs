
    import Vue from 'vue';
    import { scheduleData } from './datasource.js';
    import { SchedulePlugin, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';

    Vue.use(SchedulePlugin);

    
new Vue({
	el: '#app',
	template: `
    <div id='app'>
     <div id='container'>
      <ejs-schedule :timeFormat='timeFormat' height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings'>
           <e-views>
              <e-view option='Day'></e-view>
              <e-view option='Week'></e-view>
              <e-view option='WorkWeek'></e-view>
              <e-view option='Month'></e-view>
            </e-views>
         </ejs-schedule>
        </div>
      </div>
`,

        data () {
            return {
               height: '550px',
               timeFormat: 'HH:mm',
               selectedDate: new Date(2018, 0, 15),
               eventSettings: { dataSource: scheduleData }
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month]
        }
    
});