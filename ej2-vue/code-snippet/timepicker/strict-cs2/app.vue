<template>
  <div id="app">
    <div class='wrap'>
      <ejs-timepicker id='timepicker' :strictMode='Strict' :value='timeval' :min='minTime'
        :max='maxTime'></ejs-timepicker>
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
      Strict: true,
      timeval: new Date('7/18/2017 3:00 PM'),
      minTime: new Date('7/18/2017 10:00 AM'),
      maxTime: new Date('7/18/2017 4:00 PM')
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/timepicker/index.css";

.wrap {
  margin: 35px auto;
  width: 240px;
}
</style>