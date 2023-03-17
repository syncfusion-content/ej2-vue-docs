

<template>
<div id="app">
    <div id="wrapper1">
        <ejs-calendar id="calendar" v-model="date"></ejs-calendar>
    </div>
    <div id="wrapper2">
        <ejs-calendar id="calendar1" v-model="date"></ejs-calendar>
    </div>
</div>
</template>
<script>
import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(CalendarPlugin);
export default {
  data: function() {
    return {
      date: new Date()
    };
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
#wrapper1{
    max-width: 300px;
    float: left;
    margin-left: 100px;
}
#wrapper2{
    max-width: 300px;
    float: right;
     margin-right: 100px;
}
</style>


