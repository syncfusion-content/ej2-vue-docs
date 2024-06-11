<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-datetimepicker :placeholder="waterMark" :min="minDate" :max="maxDate" :value="val"></ejs-datetimepicker>
    </div>
  </div>
</template>
<script setup>

import { DateTimePickerComponent as EjsDatetimepicker } from '@syncfusion/ej2-vue-calendars';

const waterMark = 'Select a datetime';
const minDate = new Date('5/5/2019 2:00 AM');
const maxDate = new Date('5/25/2019 2:00 AM');
const val = new Date('5/10/2019 12:00 AM');

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>