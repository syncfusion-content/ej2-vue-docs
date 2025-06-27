<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-daterangepicker :placeholder="waterMark" :startDate="startValue" :endDate="endValue" :format="dateFormat"></ejs-daterangepicker>
    </div>
  </div>
</template>
<script>

import { DateRangePickerComponent } from '@syncfusion/ej2-vue-calendars';

export default {
  name: "App",
  components: {
    "ejs-daterangepicker": DateRangePickerComponent
  },
  data() {
    return {
      waterMark: 'Select a range',
      startValue: new Date(new Date().setDate(3)),
      endValue: new Date(new Date().setDate(28)),
      dateFormat: 'yyyy-MM-dd'
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

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>