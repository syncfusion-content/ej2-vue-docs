<template>
  <div id="app">
    <div class='wrap'>
      <ejs-calendar id='calendar' :weekNumber='weeknumber'></ejs-calendar>
    </div>
  </div>
</template>
<script setup>

import { CalendarComponent as EjsCalendar } from '@syncfusion/ej2-vue-calendars';

const weeknumber = true;

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/calendar/index.css";

.wrap {
  margin: 0px auto;
  max-width: 250px;
}
</style>