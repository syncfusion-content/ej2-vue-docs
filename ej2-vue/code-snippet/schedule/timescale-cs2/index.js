
import Vue from 'vue';
import { SchedulePlugin, Day, Week, WorkWeek, View, TimeScaleModel } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';
import { Internationalization, extend } from '@syncfusion/ej2-base';
Vue.use(SchedulePlugin);
let instance = new Internationalization();
  
new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule id='Schedule' :height='height' :selectedDate='selectedData' :eventSettings='eventSettings'
        :timeScale="timeScale">
        <e-views>
          <e-view option='Day'></e-view>
          <e-view option='Week'></e-view>
          <e-view option='WorkWeek'></e-view>
        </e-views>
        <template v-slot:majorSlotTemplate="{ data }">
          <div>{{majorSlotTemplate(data.date)}}</div>
        </template>
        <template v-slot:minorSlotTemplate="{ data }">
          <div style="text-align: right; margin-right: 15px">{{minorSlotTemplate(data.date)}}</div>
        </template>
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
        enable: true,
        interval: 60,
        slotCount: 6,
        majorSlotTemplate: "majorSlotTemplate",
        minorSlotTemplate: "minorSlotTemplate",
      },
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek]
  },
  methods: {
    majorSlotTemplate: function (date) {
      return instance.formatDate(date, { skeleton: 'hm' });
    },
    minorSlotTemplate: function (date) {
      return instance.formatDate(date, { skeleton: 'ms' }).replace(':00', '');
    }
  }
});