<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-calendar></ejs-calendar>
    </div>
  </div>
</template>
<script setup>
import { CalendarComponent as EjsCalendar } from '@syncfusion/ej2-vue-calendars';

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/calendar/index.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>