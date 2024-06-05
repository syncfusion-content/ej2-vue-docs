<template>
  <div id="app">
    <div class='wrap'>
      <ejs-calendar id='calendar' :value='dateVal' :min='minVal' :max='maxVal'
        placeholder='Select a Date'></ejs-calendar>
    </div>
  </div>
</template>
<script setup>

import { CalendarComponent as EjsCalendar } from "@syncfusion/ej2-vue-calendars";



var today = new Date();
var currentYear = today.getFullYear();
var currentMonth = today.getMonth();

const dateVal = new Date(new Date().setDate(14))
const minVal = new Date(currentYear, currentMonth, 7)
const maxVal = new Date(currentYear, currentMonth, 27)

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

.wrap {
  margin: 35px auto;
  width: 240px;
}
</style>