
import Vue from 'vue';
import { SchedulePlugin, TimelineMonth, TimelineViews } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

Vue.use(SchedulePlugin);


new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate' :eventSettings='eventSettings' :views='views' :currentView='currentView' :headerRows='headerRows'></ejs-schedule>
    </div>
  </div>
`,

  data (){
    return {
      width: '100%', height: '550px',
      selectedDate: new Date(2018, 11, 31),
      headerRows: [{ option: 'Week' }, { option: 'Date' }, { option: 'Hour' }],
      currentView: 'TimelineMonth',
      views: [
          { option: 'TimelineMonth', interval: 24 },
          { option: 'TimelineWeek', interval: 3 },
          { option: 'TimelineDay', interval: 4 }
      ],
      eventSettings: { dataSource: scheduleData }
    }
  },
  provide: {
    schedule: [TimelineViews, TimelineMonth]
  }

});