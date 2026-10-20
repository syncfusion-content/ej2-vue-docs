<template>
  <div id="app">
    <div class='wrap'>
      <ejs-calendar id='calendar' :weekNumber='weeknumber'></ejs-calendar>
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
      weeknumber: true
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