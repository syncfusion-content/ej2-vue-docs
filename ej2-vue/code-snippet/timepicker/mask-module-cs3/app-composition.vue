<template>
  <div id="app">
    <div class='wrapper1'>
      <!-- Specifies the masked timepicker without mask placeholder. -->
      <ejs-timepicker id="timepicker" :enableMask="true"></ejs-timepicker>
    </div>
    <div class='wrapper2'>
      <!-- Specifies the masked timepicker with mask placeholder. -->
      <ejs-timepicker id="placeholder" :enableMask="true" :maskPlaceholder="maskPlaceholderValue"></ejs-timepicker>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { TimePickerComponent as EjsTimepicker, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

const maskPlaceholderValue = { hour: 'h', minute: 'm', second: 's' };

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