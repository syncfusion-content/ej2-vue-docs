<template>
  <div id="app">
    <div class='wrapper1'>
      <!-- Specifies the masked timepicker without format property. -->
      <ejs-timepicker id="timepicker" :enableMask="true"></ejs-timepicker>
    </div>
    <div class='wrapper2'>
      <!-- Specifies the masked timepicker with format property. -->
      <ejs-timepicker id="format" :enableMask="true" :format="dateFormat"></ejs-timepicker>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { TimePickerComponent as EjsTimepicker, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

const dateFormat = 'hh:mm a';

provide('timepicker', [MaskedDateTime]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/timepicker/index.css";

#wrapper1 {
  min-width: 250px;
  float: left;
  margin-left: 100px;
}

#wrapper2 {
  min-width: 250px;
  float: right;
  margin-right: 100px;
}
</style>