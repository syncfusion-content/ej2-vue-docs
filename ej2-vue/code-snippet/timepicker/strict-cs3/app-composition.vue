<template>
  <div id="app">
    <div class='wrap'>
      <ejs-timepicker id='timepicker' :value='timeval' :min='minTime' :max='maxTime'></ejs-timepicker>
    </div>
  </div>
</template>
<script setup>

import { TimePickerComponent as EjsTimepicker } from "@syncfusion/ej2-vue-calendars";

const timeval = new Date('7/18/2017 3:00 PM');
const minTime = new Date('7/18/2017 10:00 AM');
const maxTime = new Date('7/18/2017 4:00 PM');

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/timepicker/index.css";

.wrap {
  margin: 35px auto;
  width: 240px;
}
</style>