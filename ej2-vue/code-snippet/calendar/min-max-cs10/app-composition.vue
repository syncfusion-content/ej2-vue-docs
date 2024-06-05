<template>
  <div id="app">
    <div class='wrap'>
      <ejs-calendar id='calendar'></ejs-calendar>
    </div>
  </div>
</template>
<script setup>

import { CalendarComponent as EjsCalendar } from "@syncfusion/ej2-vue-calendars";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

.wrap {
  margin: 0px auto;
  max-width: 250px;
}

.e-calendar .e-content tr.e-month-hide,
.e-calendar .e-content td.e-other-month>span.e-day {
  display: block;
}

.e-calendar .e-content td.e-month-hide,
.e-calendar .e-content td.e-other-month {
  pointer-events: auto;
  touch-action: auto;
}
</style>