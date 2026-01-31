<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule ref="scheduleObj" :height='height' :selectedDate='selectedDate' :views='views'
        :eventSettings='eventSettings' :allowOverlap="false" :actionBegin="onActionBegin"></ejs-schedule>
      <div class="button-container">
        <button @click="addOverlapEvent">Add Overlap Event</button>
        <button @click="addNonOverlapEvent">Add Non-Overlap Event</button>
      </div>
    </div>
  </div>
</template>
<script>
import { ScheduleComponent, Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';
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
      overlapEvent: {
        Id: 8,
        Subject: 'OverlapEvent',
        StartTime: new Date(2025, 2, 13, 10, 0),
        EndTime: new Date(2025, 2, 13, 11, 0)
      },
      nonOverlapEvent: {
        Id: 9,
        Subject: 'Non-OverlapEvent',
        StartTime: new Date(2025, 2, 12, 10, 0),
        EndTime: new Date(2025, 2, 12, 11, 0)
      }
    }
  },
  methods: {
    onActionBegin(args) {
      if ((args.requestType === 'eventCreate') || (args.requestType === 'eventChange')) {
        const result = this.checkOverlap(args);
        args.promise = result;
      }
    },
    checkOverlap(args) {
      return new Promise((resolve) => {
        const eventsToCheck = Array.isArray(args.data) ? args.data : [args.data];
        const overlappingEvents = eventsData.filter(event => 
          eventsToCheck.some(newEvent => 
            new Date(event.StartTime) < newEvent.EndTime &&
            new Date(event.EndTime) > newEvent.StartTime &&
            event.Id !== newEvent.Id
          )
        );
        
        const result = overlappingEvents.length === 0;
        
        if (!result) {
          const popupArgs = {
            type: 'OverlapAlert',
            data: eventsToCheck,
            overlapEvents: overlappingEvents,
            element: null,
            cancel: false
          };
          this.$refs.scheduleObj.ej2Instances.openOverlapAlert(popupArgs);
        }
        
        resolve(result);
      });
    },
    addOverlapEvent() {
      this.$refs.scheduleObj.ej2Instances.addEvent(this.overlapEvent);
    },
    addNonOverlapEvent() {
      this.$refs.scheduleObj.ej2Instances.addEvent(this.nonOverlapEvent);
    }
  },
  provide: {
    schedule: [Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop]
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css';
</style>
