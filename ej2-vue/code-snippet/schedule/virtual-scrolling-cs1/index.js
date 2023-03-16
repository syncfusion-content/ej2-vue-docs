
import Vue from 'vue';
import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, DragAndDrop } from '@syncfusion/ej2-vue-schedule';
import { generateObject } from './datasource.js';

Vue.use(SchedulePlugin);

new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate'  :eventSettings='eventSettings' :enableAllDayScroll='enableAllDayScroll'></ejs-schedule>
    </div>
  </div>
`,

  data (){
    return {
      height: '550px',
      width: '100%',
      eventSettings: { dataSource: generateObject() },
      selectedDate: new Date(2021, 3, 28),
      enableAllDayScroll: true
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Agenda, DragAndDrop]
  }

});