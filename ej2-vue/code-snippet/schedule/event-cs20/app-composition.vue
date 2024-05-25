<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule ref='scheduleObj' :height='height' :selectedDate='selectedDate' :eventSettings='eventSettings'
        :dragStop='onDragStop'></ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month, Agenda, DragAndDrop } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

const scheduleObj = ref(null);
const height = '550px';
const eventSettings = { dataSource: scheduleData };
const selectedDate = new Date(2018, 1, 15);

const onDragStop = function (args) {
  args.cancel = true; //cancels the drop action
  scheduleObj.value.ej2Instances.openEditor(args.data, 'Save'); //open the event window with updated start and end time
}

provide('schedule', [Day, Week, WorkWeek, Month, Agenda, DragAndDrop]);

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
