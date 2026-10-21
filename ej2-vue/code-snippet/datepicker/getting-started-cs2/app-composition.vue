<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-datepicker :placeholder="waterMark" :value="dateVal" :format="dateFormat"></ejs-datepicker>
    </div>
  </div>
</template>
<script setup>

import { DatePickerComponent as EjsDatepicker } from '@syncfusion/ej2-vue-calendars';

const waterMark = 'Select a date';
const dateVal = new Date();
const dateFormat = 'yyyy-MM-dd';

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/datepicker/index.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>