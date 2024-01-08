
import Vue from 'vue';
import {SchedulePlugin, Month, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

Vue.use(SchedulePlugin);


new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :selectedDate='selectedDate' :eventSettings='eventSettings'>
          <e-views>
            <e-view option="Month" :maxEventsPerRow='maxEventsPerRow'></e-view>
          </e-views>
        </ejs-schedule>
    </div>
  </div>
`,

  data (){
    return {
      height: '380px',
      maxEventsPerRow: 2,
      eventSettings: {
        dataSource: scheduleData
      },
      selectedDate: new Date(2023, 11, 15),
    }
  },
  provide: {
    schedule: [Month,  Resize, DragAndDrop]
  }
});