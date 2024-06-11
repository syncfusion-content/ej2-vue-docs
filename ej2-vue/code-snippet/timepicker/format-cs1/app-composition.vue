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