<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-datetimepicker :min="minDate" :max="maxDate" :value="dateVal" :strictMode="mode"></ejs-datetimepicker>
    </div>
  </div>
</template>
<script>

import { DateTimePickerComponent } from '@syncfusion/ej2-vue-calendars';

export default {
  name: "App",
  components: {
    "ejs-datetimepicker": DateTimePickerComponent
  },
  data() {
    return {
      minDate: new Date('5/5/2019 2:00 AM'),
      maxDate: new Date('5/25/2019 2:00 AM'),
      dateVal: new Date('5/10/2019 2:00 AM'),
      mode: true
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/datetimepicker/index.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>