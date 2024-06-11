<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-calendar :min="minDate" :max="maxDate" :value="dateVal"></ejs-calendar>
    </div>
  </div>
</template>
<script setup>
import { CalendarComponent as EjsCalendar } from '@syncfusion/ej2-vue-calendars';

const minDate = new Date("05/09/2017");
const maxDate = new Date("05/15/2017");
const dateVal = new Date("05/11/2017");

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>