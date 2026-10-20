<template>
   <div id="app">
      <div class='wrap'>
         <ejs-calendar id='calendar' :firstDayOfWeek='firstDay'></ejs-calendar>
      </div>
   </div>
</template>
<script>

import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";

export default {
   name: "App",
   components: {
      'ejs-calendar': CalendarComponent
   },
   data() {
      return {
         firstDay: 2
      }
   }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/calendar/index.css";

.wrap {
   margin: 0px auto;
   max-width: 250px;
}
</style>