<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-datetimepicker :min="minDate" :max="maxDate" :placehoder="waterMark" :value="dateVal"></ejs-datetimepicker>
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
      minDate: new Date(new Date().getFullYear(), new Date().getMonth(), 7, 0, 0, 0),
      maxDate: new Date(new Date().getFullYear(), new Date().getMonth(), 27, new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()),
      dateVal: new Date(new Date().setDate(14)),
      waterMark: 'Select a datetime'
    }
  }
}
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