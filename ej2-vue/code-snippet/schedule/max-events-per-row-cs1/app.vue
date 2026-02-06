<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedDate' :eventSettings='eventSettings'>
        <e-views>
          <e-view option="Month" :maxEventsPerRow='maxEventsPerRow'></e-view>
        </e-views>
      </ejs-schedule>
    </div>
  </div>
</template>
<script>
import { ScheduleComponent, ViewDirective, ViewsDirective, Month, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent,
    "e-views": ViewsDirective,
    "e-view": ViewDirective
  },
  data() {
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
    schedule: [Month, Resize, DragAndDrop]
  }
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-calendars/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material3.css';
</style>
