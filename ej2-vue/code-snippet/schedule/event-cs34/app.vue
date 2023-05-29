

<template>
  <div id='app'>
    <div id='container'>
        <ejs-schedule ref='scheduleObj' :height='height' :width='width' :selectedDate='selectedDate' :views='views' :currentView='currentView' :eventSettings='eventSettings' :actionBegin='onActionBegin'></ejs-schedule>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { isNullOrUndefined } from '@syncfusion/ej2-vue-base';
import { SchedulePlugin, Day, TimelineViews, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
import { readonlyData } from './datasource.js';

Vue.use(SchedulePlugin);

export default {
  data (){
    return {
      height: '550px',
      width: '100%',
      views: ['Day', 'TimelineWeek', 'WorkWeek', 'Month'],
      currentView: 'TimelineWeek',
      eventSettings: {
        dataSource: readonlyData
      },
      selectedDate: new Date(2018, 1, 15),
    }
  },
  methods: {
    onActionBegin: function(args) {
      if ((args.requestType === 'eventCreate' || args.requestType === 'eventChange') &&
      (args.data.length > 0 || !isNullOrUndefined(args.data))) {
        let eventData = args.data;
        let scheduleObj = this.$refs.scheduleObj.ej2Instances;
        let eventField= scheduleObj.eventFields;
        let startDate = (args.data.length > 0) ? eventData[0][eventField.startTime] : eventData[eventField.startTime];
        let endDate= (args.data.length > 0) ? eventData[0][eventField.endTime] : eventData[eventField.endTime];
        args.cancel = !scheduleObj.isSlotAvailable(startDate, endDate);
      }
    }
  },
  provide: {
    schedule: [Day, TimelineViews, WorkWeek, Month]
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



