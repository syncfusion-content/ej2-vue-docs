<template>
  <div id="app">
    <div class='wrap'>
      <ejs-calendar id='calendar' start='Decade' depth='Year'></ejs-calendar>
    </div>
  </div>
</template>
<script setup>

import { CalendarComponent as EjsCalendar } from "@syncfusion/ej2-vue-calendars";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/calendar/index.css";

.wrap {
  margin: 35px auto;
  width: 240px;
}
</style>