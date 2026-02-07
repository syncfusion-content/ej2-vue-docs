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
<script setup>
import { provide, ref } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';
import { eventsData } from './datasource.js';
import { extend } from '@syncfusion/ej2-base';

const scheduleObj = ref(null);

const height = '550px';
const views = ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'];
const eventSettings = {
  dataSource: extend([], eventsData, null, true)
};
const selectedDate = new Date(2025, 2, 6);

const overlapEvent = {
  Id: 8,
  Subject: 'OverlapEvent',
  StartTime: new Date(2025, 2, 13, 10, 0),
  EndTime: new Date(2025, 2, 13, 11, 0)
};

const nonOverlapEvent = {
  Id: 9,
  Subject: 'Non-OverlapEvent',
  StartTime: new Date(2025, 2, 12, 10, 0),
  EndTime: new Date(2025, 2, 12, 11, 0)
};

const onActionBegin = (args) => {
  if ((args.requestType === 'eventCreate') || (args.requestType === 'eventChange')) {
    const result = checkOverlap(args);
    args.promise = result;
  }
};

const checkOverlap = (args) => {
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
      scheduleObj.value.ej2Instances.openOverlapAlert(popupArgs);
    }
    
    resolve(result);
  });
};

const addOverlapEvent = () => {
  scheduleObj.value.ej2Instances.addEvent(overlapEvent);
};

const addNonOverlapEvent = () => {
  scheduleObj.value.ej2Instances.addEvent(nonOverlapEvent);
};

provide('schedule', [Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop]);
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