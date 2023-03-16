

<template>
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate'
        readonly='true' :eventSettings='eventSettings'></ejs-schedule>
    </div>
  </div>
</template>

<script>
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

export default {
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
}

</script>
<style>
  @import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';

  .e-schedule .e-vertical-view .e-content-wrap .e-appointment {
    border-radius: 8px;
  }

  .e-schedule .e-vertical-view .e-content-wrap .e-appointment .e-appointment-details {
    padding: 0;
    height: 100%;
  }

  .e-schedule .template-wrap {
    height: 100%;
    white-space: normal;
  }

  .e-schedule .template-wrap .subject {
    font-weight: 600;
    font-size: 15px;
    padding: 4px 4px 4px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .e-schedule .template-wrap .time {
    height: 50px;
    font-size: 12px;
    padding: 4px 6px 4px;
    overflow: hidden;
  }
</style>



