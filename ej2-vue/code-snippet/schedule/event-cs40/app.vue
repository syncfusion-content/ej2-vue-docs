<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedDate' :views='views'
        :eventSettings='eventSettings' :allowOverlap="false"></ejs-schedule>
    </div>
  </div>
</template>
<script>
import { ScheduleComponent, Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop  } from '@syncfusion/ej2-vue-schedule';
import { eventsData } from './datasource.js';
import { extend } from '@syncfusion/ej2-base';

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent
  },
  data() {
    return {
      height: '550px',
      views: ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'],
      eventSettings: {
        dataSource: extend([], eventsData, null, true)
      },
      selectedDate: new Date(2025, 2, 6),
    }
  },
  provide: {
    schedule: [Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop ]
  }
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';
</style>
