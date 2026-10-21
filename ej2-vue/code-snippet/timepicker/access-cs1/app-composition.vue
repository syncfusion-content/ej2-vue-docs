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
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/timepicker/index.css";

.wrap {
  margin: 35px auto;
  width: 240px;
}
</style>