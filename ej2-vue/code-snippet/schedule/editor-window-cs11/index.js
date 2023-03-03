
import Vue from 'vue';
import { Internationalization } from '@syncfusion/ej2-base';
import { SchedulePlugin, Month } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

Vue.use(SchedulePlugin);


new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :width='width' :views='views' :selectedDate='selectedDate' :eventSettings='eventSettings' :popupOpen='onPopupOpen'></ejs-schedule>
    </div>
  </div>
`,

  data (){
    return {
      height: '550px',
      width: '100%',
      views: ['Month'],
      eventSettings: {
          dataSource: scheduleData
      },
      selectedDate: new Date(2018, 1, 15),
    }
  },
  methods: {
    onPopupOpen: function(args) {
        if (args.type === 'EventContainer') {
            let instance = new Internationalization();
            let date  = instance.formatDate(args.data.date, { skeleton: 'MMMEd' });
            args.element.querySelector('.e-header-date').innerText = date;
            args.element.querySelector('.e-header-day').innerText = 'Event count: ' + args.data.event.length;
        }
    }
  },
  provide: {
    schedule: [Month]
  }

});