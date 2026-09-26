<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <ejs-calendar></ejs-calendar>
  </div>
</template>
<script>

import { CalendarComponent } from '@syncfusion/ej2-vue-calendars';
export default {
  name: "App",
  components: {
    "ejs-calendar": CalendarComponent
  },
  data() {
    return {
      msg: 'Hi EJ2 Components for Vue',
      name: 'Calendar'
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material-theme/styles/calendar/index.css";

#app {
  color: #008cff;
  height: 40px;
  left: 45%;
  position: absolute;
  top: 45%;
  width: 30%;
}
</style>