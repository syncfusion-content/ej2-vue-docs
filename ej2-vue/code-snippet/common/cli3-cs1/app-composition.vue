

<template>
    <div id="app">
    <h1>{{ msg }}</h1>
    <ejs-calendar ></ejs-calendar>
  </div>
</template>
<script setup>
import { CalendarComponent as EjsCalendar } from '@syncfusion/ej2-vue-calendars';

Vue.use(CalendarPlugin);
const msg = 'Hi EJ2 Components for Vue';
const name = 'Calendar';
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
  #app {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
  }
</style>


