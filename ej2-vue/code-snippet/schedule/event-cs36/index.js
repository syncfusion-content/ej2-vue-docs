
import Vue from 'vue';
import { SchedulePlugin, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

Vue.use(SchedulePlugin);



new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule ref='scheduleObj' :height='height' :width='width' :selectedDate='selectedDate' :currentView='currentView' :views='views' :eventSettings='eventSettings'>
        </ejs-schedule>
    </div>
  </div>
`,

  data (){
    return {
      height: '550px',
      width: '100%',
      views: ['TimelineDay', 'TimelineMonth'],
      currentView: 'TimelineMonth',
      eventSettings: {
        dataSource: scheduleData,
        enableMaxHeight: true,
        enableIndicator: false
      },
      selectedDate: new Date(2018, 1, 15),
    }
  },
  provide: {
    schedule: [TimelineViews, TimelineMonth]
  }

});