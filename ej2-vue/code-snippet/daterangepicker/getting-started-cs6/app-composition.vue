<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-daterangepicker :format="dateFormat" :separator="seperate" :placeholder="waterMark"></ejs-daterangepicker>
    </div>
  </div>
</template>
<script setup>

import { DateRangePickerComponent as EjsDaterangepicker } from '@syncfusion/ej2-vue-calendars';

const waterMark = 'Select a Range';
const dateFormat = "yyyy-MM-dd";
const seperate = "to";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/daterangepicker/index.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>