<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-datetimepicker :minTime="minTime" :maxTime="maxTime" :placehoder="waterMark" :value="dateVal"></ejs-datetimepicker>
    </div>
  </div>
</template>
<script setup>

import { DateTimePickerComponent as EjsDatetimepicker } from '@syncfusion/ej2-vue-calendars';

const minTime = new Date(new Date().getFullYear(), new Date().getMonth(), 7, 0, 0, 0);
const maxTime = new Date(new Date().getFullYear(), new Date().getMonth(), 27, 20, 30, 0);
const dateVal = new Date(new Date().setDate(14));
const waterMark = 'Select a datetime';

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