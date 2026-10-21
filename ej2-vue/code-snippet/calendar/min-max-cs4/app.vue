<template>
  <div id="app">
    <div class='wrap'>
      <ejs-calendar id='calendar' :renderDayCell="disableDate"></ejs-calendar>
    </div>
  </div>
</template>
<script>

import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";

export default {
  name: "App",
  components: {
    "ejs-calendar": CalendarComponent
  },
  methods: {
    disableDate: function (args) {
      if (args.date.getDay() === 0 || args.date.getDay() === 6) {
        args.isDisabled = true;
      }
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/calendar/index.css";

.wrap {
  margin: 35px auto;
  width: 240px;
}
</style>