
import Vue from 'vue';
import { SchedulePlugin, TimelineViews } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

Vue.use(SchedulePlugin);


new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate' :eventSettings='eventSettings' :views='views' :startHour='startHour' :endHour='endHour' :headerRows='headerRows'></ejs-schedule>
    </div>
  </div>
`,

  data (){
    return {
      height: '550px',
      width: '100%',
      startHour: '09:00',
      endHour: '13:00',
      headerRows: [
        { option: 'Year' },
        { option: 'Month' },
        { option: 'Week' },
        { option: 'Date' },
        { option: 'Hour' }
      ],
      views: ['TimelineWeek'],
      selectedDate: new Date(2018, 11, 31),
      eventSettings: { dataSource: scheduleData }
    }
  },
  provide: {
    schedule: [TimelineViews]
  }

});