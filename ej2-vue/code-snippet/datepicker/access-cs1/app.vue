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
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/datepicker/index.css";

.wrap {
  margin: 35px auto;
  width: 240px;
}
</style>