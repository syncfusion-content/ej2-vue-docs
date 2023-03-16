
    import Vue from 'vue';
    import { scheduleData } from './datasource.js';
    import { SchedulePlugin, Day, Week, WorkWeek } from '@syncfusion/ej2-vue-schedule';

    Vue.use(SchedulePlugin);

    
new Vue({
	el: '#app',
	template: `
    <div id='app'>
     <div id='container'>
      <ejs-schedule width='100%' height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings' :enableRtl='enableRtl'>
           <e-views>
              <e-view option='Day'></e-view>
              <e-view option='Week'></e-view>
              <e-view option='WorkWeek'></e-view>
            </e-views>
         </ejs-schedule>
        </div>
      </div>
`,

        data () {
            return {
               enableRtl: true,
               selectedDate: new Date(2018, 0, 15),
               eventSettings: { dataSource: scheduleData }
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek]
        }
    
});