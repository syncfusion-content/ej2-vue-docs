

<template>
  <div id="app">
        <div class='wrap'>
           <ejs-calendar id='calendar' ref="CalendarInstance"></ejs-calendar>
        </div>
  </div>
</template>
<script>
import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(CalendarPlugin);
export default {
  mounted () {
      let calendarObj = this.$refs.CalendarInstance;
       document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84) {
        // press alt+t to focus the control.
        calendarObj.$el.querySelectorAll('.e-content table')[0].focus();
    }
        }
}
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


