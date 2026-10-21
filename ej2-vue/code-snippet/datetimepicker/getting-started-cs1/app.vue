<template>
  <div id="app">
    <div class='wrap'>
      <ejs-datetimepicker placeholder='Select a datetime' ref="DateInstance"></ejs-datetimepicker>
    </div>
  </div>
</template>
<script>

import { DateTimePickerComponent } from "@syncfusion/ej2-vue-calendars";


export default {
  name: "App",
  components: {
    "ejs-datetimepicker": DateTimePickerComponent
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
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/datetimepicker/index.css";

.wrap {
  margin: 35px auto;
  width: 240px;
}
</style>