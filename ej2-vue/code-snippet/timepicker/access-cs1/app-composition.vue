<template>
  <div id="app">
    <div class='wrap'>
      <ejs-timepicker id='timepicker' ref="time"></ejs-timepicker>
    </div>
  </div>
</template>
<script setup>

import { TimePickerComponent as EjsTimepicker } from "@syncfusion/ej2-vue-calendars";
import { onMounted, ref } from 'vue';

const time = ref(null);
onMounted(() => {
  let TimeObj = time.value;
  document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84) {
      // press alt+t to focus the control.
      TimeObj.$el.focus();
    }
  }
});

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

.wrap {
  margin: 35px auto;
  width: 240px;
}
</style>