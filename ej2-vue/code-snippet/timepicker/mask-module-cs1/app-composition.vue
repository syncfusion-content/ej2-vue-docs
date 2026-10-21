<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-timepicker id="timepicker" :enableMask="true"></ejs-timepicker>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { TimePickerComponent as EjsTimepicker, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

provide('timepicker', [MaskedDateTime]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/timepicker/index.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>