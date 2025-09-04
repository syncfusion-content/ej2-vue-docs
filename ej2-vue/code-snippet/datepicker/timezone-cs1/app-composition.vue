<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-datepicker :placeholder="waterMark" :serverTimezoneOffset="serverOffset" :value="dateVal"></ejs-datepicker>
    </div>
  </div>
</template>
<script setup>
import { DatePickerComponent as EjsDatepicker } from '@syncfusion/ej2-vue-calendars';

const waterMark = 'Select a date';
const serverOffset = 5.5;
const dateVal = new Date();

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>