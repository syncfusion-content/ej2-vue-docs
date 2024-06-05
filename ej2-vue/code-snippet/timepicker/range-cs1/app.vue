<template>
  <div id="app">
    <div class='wrap'>
      <ejs-timepicker id='timepicker' :value='timeval' :min='minTime' :max='maxTime'></ejs-timepicker>
    </div>
  </div>
</template>
<script>

import { TimePickerComponent } from "@syncfusion/ej2-vue-calendars";

export default {
  name: "App",
  components: {
    "ejs-timepicker": TimePickerComponent
  },
  data() {
    return {
      timeval: new Date('3/8/2017 11:00 AM'),
      minTime: new Date('3/8/2017 9:00 AM'),
      maxTime: new Date('3/8/2017 11:30 AM')
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

.wrap {
  margin: 35px auto;
  width: 240px;
}
</style>