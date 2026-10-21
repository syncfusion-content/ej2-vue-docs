<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-timepicker :placeholder="waterMark"></ejs-timepicker>
    </div>
  </div>
</template>
<script>
import { TimePickerComponent } from '@syncfusion/ej2-vue-calendars';

export default {
  name: "App",
  components: {
    'ejs-timepicker': TimePickerComponent
  },
  data() {
    return {
      waterMark: 'Select a time'
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/timepicker/index.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>