
import Vue from 'vue';
import { SchedulePlugin, Day, Week, TimelineViews, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

Vue.use(SchedulePlugin);

let data = [{
    Id: 1,
    Subject: 'Paris',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 12, 30),
    StartTimezone: 'Europe/Moscow',
    EndTimezone: 'Europe/Moscow'
}];



new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :selectedDate='selectedDate' :eventSettings='eventSettings'>
            <e-views>
                <e-view option='Day'></e-view>
                <e-view option='Week'></e-view>
                <e-view option='TimelineWeek'></e-view>
                <e-view option='Month'></e-view>
                <e-view option='Agenda'></e-view>
            </e-views>
        </ejs-schedule>
    </div>
  </div>
`,

  data (){
        return {
            height: '550px',
            selectedDate: new Date(2018, 1, 15),
            eventSettings: {
                dataSource: data
            }
        }
    },
    provide: {
        schedule: [Day, Week, TimelineViews, Month, Agenda]
    }

});