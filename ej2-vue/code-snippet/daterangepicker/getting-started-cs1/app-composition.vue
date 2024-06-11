<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-daterangepicker placeholder="Select a Range" ref="DateInstance"></ejs-daterangepicker>
    </div>
  </div>
</template>
<script setup>

import { DateRangePickerComponent as EjsDaterangepicker } from '@syncfusion/ej2-vue-calendars';
import { onMounted, ref } from 'vue';

const DateInstance = ref(null);

onMounted(() => {
  let DateObj = DateInstance.value;
  document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84) {
      // press alt+t to focus the control.
      DateObj.$el.focus();
    }
  }
}
);

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>