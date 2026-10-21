<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-daterangepicker :placeholder="waterMark" :renderDayCell="disableDate"></ejs-daterangepicker>
    </div>
  </div>
</template>
<script setup>

import { DateRangePickerComponent as EjsDaterangepicker } from '@syncfusion/ej2-vue-calendars';

const waterMark = 'Select a Range';

const disableDate = (args) => {
  if (args.date.getDay() === 0 || args.date.getDay() === 6) {
    args.isDisabled = true;
  }
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/daterangepicker/index.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>