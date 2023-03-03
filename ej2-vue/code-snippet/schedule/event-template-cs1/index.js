
import Vue from 'vue';
import { Internationalization } from '@syncfusion/ej2-base';
import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
import { webinarData } from './datasource.js';

Vue.use(SchedulePlugin);
var instance = new Internationalization();
var eventTemplateVue = Vue.component('eventTemplate', {
  template:`<div class='template-wrap' :style='{background: data.SecondaryColor}'>
        <div class='subject' :style='{background:data.PrimaryColor}'>{{data.Subject}}</div>
        <div class='time' :style='{background:data.PrimaryColor}'>Time: {{getTimeString(data.StartTime)}} - {{getTimeString(data.EndTime)}}</div></div>`,
  data() {
    return {
      data: {}
    };
  },
  methods: {
    getTimeString: function (value) {
      return instance.formatDate(value, { skeleton: 'hm' });
    }
  }
});



new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate'
        readonly='true' :eventSettings='eventSettings'></ejs-schedule>
    </div>
  </div>
`,

  data (){
    return {
      height: '550px',
      width: '100%',
      eventSettings: {
        dataSource: webinarData,
        template: function (e) {
          return {
            template: eventTemplateVue
          };
        }
      },
      selectedDate: new Date(2018, 1, 15),
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Agenda]
  }

});