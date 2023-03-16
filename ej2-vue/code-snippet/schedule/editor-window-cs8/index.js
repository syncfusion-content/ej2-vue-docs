
import Vue from 'vue';
import { SchedulePlugin, Day, Week, Month, TimelineViews, Agenda } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

Vue.use(SchedulePlugin);



new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :width='width' :views='views' :selectedDate='selectedDate' :eventSettings='eventSettings' :showQuickInfo='showQuickInfo'></ejs-schedule>
    </div>
  </div>
`,

  data (){
    return {
      height: '550px',
      width: '100%',
      views: ['TimelineDay', 'Day', 'Week', 'Month', 'Agenda'],
      eventSettings: {
          dataSource: scheduleData
      },
      selectedDate: new Date(2018, 1, 15),
      showQuickInfo: false,
    }
  },
  provide: {
    schedule: [TimelineViews, Day, Week, Month, Agenda]
  }

});