

<template>
  <div id="app">
        <div class='wrap'>
           <ejs-calendar id='calendar' :renderDayCell="disableDate" ></ejs-calendar>
        </div>
  </div>
</template>
<script>
import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(CalendarPlugin);
export default {
  methods: {
        disableDate: function(args) {
             if (args.date.getDay() === 0 || args.date.getDay() === 6) {
               args.isDisabled = true;
            }
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


