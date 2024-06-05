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
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>