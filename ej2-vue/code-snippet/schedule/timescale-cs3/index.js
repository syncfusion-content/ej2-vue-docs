
import Vue from 'vue';
import { SchedulePlugin, Day, Week, TimelineViews, View } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';
import { extend } from '@syncfusion/ej2-base';

Vue.use(SchedulePlugin);


new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :selectedDate='selectedData' :eventSettings='eventSettings'
        :timeScale='timeScale'>
        <e-views>
          <e-view option='Day'></e-view>
          <e-view option='Week'></e-view>
          <e-view option='TimelineWorkWeek'></e-view>
        </e-views>
        </ejs-schedule>
    </div>
  </div>
`,

  data (){
    return {
      height: '550px',
      eventSettings: { dataSource: extend([], scheduleData, null, true)  },
      selectedData: new Date(2018, 1, 15),
      timeScale: {
        enable: false,
      },
    }
  },
  provide: {
    schedule: [Day, Week, TimelineViews]
  }

});