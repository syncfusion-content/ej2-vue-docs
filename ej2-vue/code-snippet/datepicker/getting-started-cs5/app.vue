<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-datepicker :placeholder="waterMark" :value="dateVal" :format="dateFormat" :inputFormats="['dd/MM/yyyy', 'yyyyMMdd']"></ejs-datepicker>
    </div>
  </div>
</template>
<script>

import { DatePickerComponent } from '@syncfusion/ej2-vue-calendars';

export default {
  name: "App",
  components: {
    "ejs-datepicker": DatePickerComponent
  },
  data() {
    return {
      waterMark: 'Select a date',
      dateVal: new Date(),
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