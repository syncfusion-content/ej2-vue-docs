<template>
  <div id="app">
    <div class='wrap'>
      <ejs-datepicker id='date' placeholder='Select Date' ref="DateInstance"></ejs-datepicker>
    </div>
  </div>
</template>
<script>

import { DatePickerComponent } from "@syncfusion/ej2-vue-calendars";


export default {
  name: "App",
  components: {
    "ejs-datepicker": DatePickerComponent
  },

  mounted() {
    let DateObj = this.$refs.DateInstance;
    document.onkeyup = function (e) {
      if (e.altKey && e.keyCode === 84) {
        // press alt+t to focus the control.
        DateObj.$el.focus();
      }
    }
  }
}
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