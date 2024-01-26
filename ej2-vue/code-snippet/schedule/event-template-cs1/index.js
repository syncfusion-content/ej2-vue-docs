
import Vue from 'vue';
import { Internationalization } from '@syncfusion/ej2-base';
import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
import { webinarData } from './datasource.js';

Vue.use(SchedulePlugin);
var instance = new Internationalization();

new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate'
        readonly='true' :eventSettings='eventSettings'>
          <template v-slot:eventTemplate="{ data }">
            <div class='template-wrap' :style='{background: data.SecondaryColor}'>
              <div class='subject' :style='{background:data.PrimaryColor}'>{{data.Subject}}</div>
              <div class="time" :style="{background: data.PrimaryColor}">Time: {{getTimeString(data)}}</div>
            </div>
        </template>
      </ejs-schedule>
    </div>
  </div>
`,

  data (){
    return {
      height: '550px',
      width: '100%',
      eventSettings: {
        template: "eventTemplate",
        dataSource: webinarData
      },
      selectedDate: new Date(2018, 1, 15),
    }
  },
  methods: {
    getTimeString: function (data) {
      return instance.formatDate(data.StartTime, { skeleton: 'hm' }) + " - " + instance.formatDate(data.EndTime, { skeleton: 'hm' });
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Agenda]
  }
});