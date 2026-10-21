<template>
  <div id="app">
    <div class='wrap'>
      <ejs-datepicker id='datepicker' :renderDayCell="disableDate" placeholder='Select a Date'></ejs-datepicker>
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

  methods: {
    disableDate: function (args) {
      if (args.date.getDay() === 0 || args.date.getDay() === 6) {
        args.isDisabled = true;
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