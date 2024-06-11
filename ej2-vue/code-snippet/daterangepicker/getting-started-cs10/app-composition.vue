<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-daterangepicker :min="minDate" :max="maxDate" :placeholder="waterMark"></ejs-daterangepicker>
    </div>
  </div>
</template>
<script setup>

import { DateRangePickerComponent as EjsDaterangepicker } from '@syncfusion/ej2-vue-calendars';

const waterMark = 'Select a Range';
const minDate = new Date(new Date().getFullYear(), new Date().getMonth(), 15);
const maxDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 15);

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