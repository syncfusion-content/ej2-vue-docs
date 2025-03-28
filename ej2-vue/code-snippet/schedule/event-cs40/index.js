
import Vue from 'vue';
import { SchedulePlugin, Day, Week, TimelineViews, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
import { eventsData } from './datasource.js';
import { extend } from '@syncfusion/ej2-base';

Vue.use(SchedulePlugin);


new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :selectedDate='selectedDate' :views = 'views' :eventSettings='eventSettings' :allowOverlap="false"></ejs-schedule>
    </div>
  </div>
`,

  data (){
    return {
      height: '550px',
      views: ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'],
      eventSettings: {
        dataSource: extend([], eventsData, null, true)
      },
      selectedDate: new Date(2025, 2, 6),
    }
  },
  provide: {
    schedule: [Day, Week, TimelineViews, Month, Agenda]
  }

});