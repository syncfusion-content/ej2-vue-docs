<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-datetimepicker :min="minDate" :max="maxDate" :placehoder="waterMark" :value="dateVal"></ejs-datetimepicker>
    </div>
  </div>
</template>
<script setup>

import { DateTimePickerComponent as EjsDatetimepicker } from '@syncfusion/ej2-vue-calendars';

const minDate = new Date(new Date().getFullYear(), new Date().getMonth(), 7, 0, 0, 0);
const maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), 27, new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());
const dateVal = new Date(new Date().setDate(14));
const waterMark = 'Select a datetime';

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/datetimepicker/index.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>