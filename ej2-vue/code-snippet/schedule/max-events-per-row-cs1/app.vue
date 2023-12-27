

<template>
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :selectedDate='selectedDate' :eventSettings='eventSettings'></ejs-schedule>
          <e-views>
            <e-view option="Month" :maxEventsPerRow='maxEventsPerRow'></e-view>
            <e-view option="TimelineMonth" :maxEventsPerRow='maxEventsPerRow'></e-view>
            <e-view option="TimelineYear" displayName="Horizontal TimelineYear" :maxEventsPerRow='maxEventsPerRow'></e-view>
            <e-view option="TimelineYear" displayName="Vertical TimelineYear" orientation="Vertical" :maxEventsPerRow='maxEventsPerRow'></e-view>
          </e-views>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import {SchedulePlugin, Month, TimelineMonth, TimelineYear, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

Vue.use(SchedulePlugin);
export default {
  data (){
    return {
      height: '550px',
      maxEventsPerRow: 2,
      eventSettings: {
        dataSource: scheduleData
      },
      selectedDate: new Date(2023, 11, 15),
    }
  },
  provide: {
    schedule: [Month, TimelineMonth, TimelineYear, Resize, DragAndDrop]
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
</style>



