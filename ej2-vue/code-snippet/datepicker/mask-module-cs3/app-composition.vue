<template>
  <div id="app">
    <div class='wrapper1'>
      <!-- Specifies the masked datepicker without mask placeholder. -->
      <ejs-datepicker id="datepicker" :enableMask="true"></ejs-datepicker>
    </div>
    <div class='wrapper2'>
      <!-- Specifies the masked datepicker with mask placeholder. -->
      <ejs-datepicker id="placeholder" :enableMask="true" :maskPlaceholder='maskPlaceholderValue'></ejs-datepicker>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { DatePickerComponent as EjsDatepicker, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

const maskPlaceholderValue = { day: 'd', month: 'M', year: 'y' };

provide('datepicker', [MaskedDateTime]);

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

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