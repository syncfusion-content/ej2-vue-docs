<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-timepicker :min="minDate" :max="maxDate" :value="timeVal"></ejs-timepicker>
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
      minDate: new Date("05/07/2017 7:00 AM"),
      maxDate: new Date("05/07/2017 4:00 PM"),
      timeVal: new Date("05/27/2017 1:00 PM")
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>