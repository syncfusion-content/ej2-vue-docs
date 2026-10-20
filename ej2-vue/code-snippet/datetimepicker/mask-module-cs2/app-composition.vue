<template>
  <div id="app">
    <div class='wrapper1'>
      <!-- Specifies the masked datetimepicker without format property. -->
      <ejs-datetimepicker id="datetimepicker" :enableMask="true"></ejs-datetimepicker>
    </div>
    <div class='wrapper2'>
      <!-- Specifies the masked datetimepicker with format property. -->
      <ejs-datetimepicker id="datetimepicker" :enableMask="true" :format='dateFormat'></ejs-datetimepicker>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { DateTimePickerComponent as EjsDatetimepicker, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

const dateFormat = 'M/d/yyyy hh:mm a';

provide('datetimepicker', [MaskedDateTime]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/datetimepicker/index.css";

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