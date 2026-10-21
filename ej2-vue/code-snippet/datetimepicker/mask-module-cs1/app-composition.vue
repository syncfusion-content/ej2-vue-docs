<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-datetimepicker id="datetimepicker" :enableMask="true"></ejs-datetimepicker>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { DateTimePickerComponent as EjsDatetimepicker, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

provide('datetimepicker', [MaskedDateTime]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/datetimepicker/index.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>