<template>
   <div id="app">
      <div class='wrap'>
         <ejs-calendar id='calendar' :firstDayOfWeek='firstDay'></ejs-calendar>
      </div>
   </div>
</template>
<script setup>

import { CalendarComponent as EjsCalendar } from "@syncfusion/ej2-vue-calendars";

const firstDay = 2;

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

.wrap {
   margin: 0px auto;
   max-width: 250px;
}
</style>