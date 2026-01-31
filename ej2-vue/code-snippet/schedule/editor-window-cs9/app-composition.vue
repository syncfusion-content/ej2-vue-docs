<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :views='views'
        :quickInfoOnSelectionEnd='quickInfoOnSelectionEnd'></ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, Month, TimelineViews, Agenda } from '@syncfusion/ej2-vue-schedule';

const height = '550px';
const width = '100%';
const views = ['TimelineDay', 'Day', 'Week', 'Month', 'Agenda'];
const quickInfoOnSelectionEnd = true;

provide('schedule', [TimelineViews, Day, Week, Month, Agenda]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css";
</style>
