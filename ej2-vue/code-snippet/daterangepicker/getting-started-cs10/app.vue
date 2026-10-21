<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-daterangepicker :min="minDate" :max="maxDate" :placeholder="waterMark"></ejs-daterangepicker>
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
      waterMark: 'Select a Range',
      minDate: new Date(new Date().getFullYear(), new Date().getMonth(), 15),
      maxDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 15)
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/daterangepicker/index.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>