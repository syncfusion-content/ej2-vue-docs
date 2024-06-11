<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :views='views' :selectedDate='selectedDate'
        :eventSettings='eventSettings' :popupOpen='onPopupOpen'></ejs-schedule>
    </div>
  </div>
</template>
<script>

import { Internationalization } from '@syncfusion/ej2-base';
import { ScheduleComponent, Month } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent
  },
  data() {
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
    onPopupOpen: function (args) {
      if (args.type === 'EventContainer') {
        let instance = new Internationalization();
        let date = instance.formatDate(args.data.date, { skeleton: 'MMMEd' });
        args.element.querySelector('.e-header-date').innerText = date;
        args.element.querySelector('.e-header-day').innerText = 'Event count: ' + args.data.event.length;
      }
    }
  },
  provide: {
    schedule: [Month]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";

/* csslint ignore:start */
.e-schedule .e-more-popup-wrapper .e-header-date {
  font-size: 15px !important;
  max-width: 44% !important;
}

/* csslint ignore:end */
</style>
