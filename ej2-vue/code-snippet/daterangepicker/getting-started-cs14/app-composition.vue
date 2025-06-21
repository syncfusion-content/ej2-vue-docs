<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-daterangepicker :placeholder="waterMark" :startDate="startValue" :endDate="endValue" :format="dateFormat" :inputFormats="['dd/MM/yyyy', 'yyyyMMdd']"></ejs-daterangepicker>
    </div>
  </div>
</template>
<script setup>

import { DateRangePickerComponent as EjsDaterangepicker } from '@syncfusion/ej2-vue-calendars';

const waterMark = 'Select a range';
const startValue= new Date(new Date().setDate(3));
const endValue= new Date(new Date().setDate(28));
const dateFormat = 'yyyy-MM-dd';

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