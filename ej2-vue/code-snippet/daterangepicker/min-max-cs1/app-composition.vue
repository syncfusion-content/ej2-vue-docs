

<template>
    <div id="app">
      <div class='wrapper'>
        <ejs-daterangepicker :startDate="startVal" :endDate="endVal" :placeholder="waterMark"></ejs-daterangepicker>
      </div>
    </div>
</template>
<script setup>
import { DateRangePickerComponent as EjsDaterangepicker } from '@syncfusion/ej2-vue-calendars';


const startVal = new Date("11/12/2019 12:00 PM");
const endVal = new Date("11/25/2019 5:00 PM");
const waterMark = 'Select a Range';
       
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


