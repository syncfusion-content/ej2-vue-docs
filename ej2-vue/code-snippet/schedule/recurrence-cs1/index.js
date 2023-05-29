
  import Vue from 'vue';
  import { scheduleData } from './datasource.js';
  import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

  Vue.use(SchedulePlugin);

  
new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
      <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate'
      :eventSettings='eventSettings' :popupOpen='onPopupOpen'>
      </ejs-schedule>
    </div>
  </div>
`,

    data () {
      return {
        selectedDate: new Date(2018, 1, 15),
        eventSettings: { dataSource: scheduleData }
      }
    },
    methods: {
        onPopupOpen: function(args) {
            if (args.type == 'Editor') {
                let recurrenceEditorObj =
                    args.element.querySelector('.e-recurrenceeditor').ej2_instances[0];
                recurrenceEditorObj.frequencies = ['none', 'daily', 'weekly'];
            }
        }
    },
    provide: {
      schedule: [ Day, Week, WorkWeek, Month, Agenda]
    }
  
});