<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-calendar></ejs-calendar>
    </div>
  </div>
</template>
<script>
import { CalendarComponent } from '@syncfusion/ej2-vue-calendars';

export default {
  name: "App",
  components: {
    'ejs-calendar': CalendarComponent
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/calendar/index.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>