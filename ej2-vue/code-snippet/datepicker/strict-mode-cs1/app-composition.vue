<template>
  <div id="app">
    <div class='wrap'>
      <ejs-datepicker id='datepicker' :strictMode='strict' :value='dateVal' :min='minVal'
        :max='maxVal'></ejs-datepicker>
    </div>
  </div>
</template>
<script setup>

import { DatePickerComponent as EjsDatepicker } from "@syncfusion/ej2-vue-calendars";

const strict = true;
const dateVal = new Date('5/28/2017');
const minVal = new Date('5/5/2017');
const maxVal = new Date('5/25/2017');

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

.wrap {
  margin: 35px auto;
  width: 240px;
}
</style>