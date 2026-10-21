<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-datetimepicker :placeholder="waterMark" :value='dateVal' :format="dateFormat" :floatLabelType="auto"></ejs-datetimepicker>
    </div>
  </div>
</template>
<script setup>

import { DateTimePickerComponent as EjsDatetimepicker } from '@syncfusion/ej2-vue-calendars';

const waterMark = 'Select a datetime';
const dateVal = new Date();
const dateFormat = 'yyyy-MM-dd hh:mm';

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/datetimepicker/index.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}

.e-input-group.e-control-wrapper.e-float-input .e-float-text::after {
  content: '*';
  color: red;
}
</style>