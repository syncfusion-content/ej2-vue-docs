
import Vue from 'vue';
import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, Resize } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

Vue.use(SchedulePlugin);


new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :selectedDate='selectedDate' :resizeStart='onResizeStart' :eventSettings='eventSettings'></ejs-schedule>
    </div>
  </div>
`,

  data (){
    return {
      height: '550px',
      eventSettings: { dataSource: scheduleData },
      selectedDate: new Date(2018, 1, 15),
    }
  },
  methods: {
    onResizeStart: function(args) {
      args.scroll = { enable: true, scrollBy: 15 };
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Agenda, Resize]
  }

});