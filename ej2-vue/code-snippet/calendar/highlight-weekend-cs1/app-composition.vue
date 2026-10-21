<template>
  <div id="app">
    <div class='wrap'>
      <ejs-calendar id='calendar' :renderDayCell="highlightWeekend"></ejs-calendar>
    </div>
  </div>
</template>
<script setup>

import { CalendarComponent as EjsCalendar } from "@syncfusion/ej2-vue-calendars";

const highlightWeekend = (args) => {
  if (args.date.getDay() === 0 || args.date.getDay() === 6) {
    // To highlight the week end of every month
    args.element.classList.add('e-highlightweekend');
  }
}


</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/calendar/index.css";

.wrap {
  margin: 35px auto;
  width: 240px;
}

#date_label {
  display: block;
  width: 248px;
  color: rgba(0, 0, 0, 0.58);
  margin-left: 5px;
}

body.highcontrast #date_label {
  color: white;
}

.e-highlightweekend {
  background-color: #cfe9f3;
}
</style>