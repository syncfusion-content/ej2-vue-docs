<template>
  <div id="app">
    <div class='wrap'>
      <ejs-datepicker id='datepicker' :value='calVal' :min='minVal' :max='maxVal'></ejs-datepicker>
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

  data() {
    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth();
    return {
      calVal: new Date(new Date().setDate(14)),
      minVal: new Date(currentYear, currentMonth, 7),
      maxVal: new Date(currentYear, currentMonth, 27),
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