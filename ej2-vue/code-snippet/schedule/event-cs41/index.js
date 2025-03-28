
import Vue from 'vue';
import { SchedulePlugin, Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';
import { eventsData } from './datasource.js';
import { extend } from '@syncfusion/ej2-base';

Vue.use(SchedulePlugin);

new Vue({
  el: '#app',
  template: `
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
  `,

  data() {
    return {
      height: '550px',
      views: ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'],
      eventSettings: {
        dataSource: extend([], eventsData, null, true)
      },
      selectedDate: new Date(2025, 2, 6),
      overlapEvent: extend({}, overlapEvent),
      nonOverlapEvent: extend({}, nonOverlapEvent)
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
        const overlappingEvents = this.eventSettings.dataSource.filter(event => 
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
          this.$refs.scheduleObj.openOverlapAlert(popupArgs);
        }
        
        resolve(result);
      });
    },
    
    addOverlapEvent() {
      this.$refs.scheduleObj.addEvent(this.overlapEvent);
    },
    
    addNonOverlapEvent() {
      this.$refs.scheduleObj.addEvent(this.nonOverlapEvent);
    }
  },

  provide: {
    schedule: [Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop]
  }

});