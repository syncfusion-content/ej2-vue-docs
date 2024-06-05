<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-datetimepicker :min="minDate" :max="maxDate" :value="dateVal" :placeholder="waterMark"></ejs-datetimepicker>
    </div>
  </div>
</template>
<script setup>

import { DateTimePickerComponent as EjsDatetimepicker } from '@syncfusion/ej2-vue-calendars';

const minDate = new Date('5/5/2017 2:00 PM');
const maxDate = new Date('5/25/2017 3:00 PM');
const dateVal = new Date('5/25/2017 4:00 PM');
const waterMark = "Select a date and time";

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