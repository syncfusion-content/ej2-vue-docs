<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-datepicker id="datepicker" :enableMask="true"></ejs-datepicker>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { DatePickerComponent as EjsDatepicker, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

provide('datepicker', [MaskedDateTime]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/datepicker/index.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>