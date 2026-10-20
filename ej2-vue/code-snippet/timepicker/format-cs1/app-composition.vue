<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-timepicker :step="timeStep" :format="timeFormat" :value="timeVal"></ejs-timepicker>
    </div>
  </div>
</template>
<script setup>
import { TimePickerComponent as EjsTimepicker } from '@syncfusion/ej2-vue-calendars';

const timeStep = 60;
const timeFormat = 'HH:mm';
const timeVal = new Date();

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/timepicker/index.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>