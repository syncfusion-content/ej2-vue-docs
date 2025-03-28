<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-datetimepicker :placeholder="waterMark" :value="dateVal :format="dateFormat" :inputFormats="['dd/MM/yyyy hh:mm', 'yyyyMMdd hh:mm']" :floatLabelType="auto"></ejs-datetimepicker>
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
      waterMark: 'Select a datetime',
      dateVal: new Date(),
      dateFormat: 'yyyy-MM-dd hh:mm'
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

.e-input-group.e-control-wrapper.e-float-input .e-float-text::after {
  content: '*';
  color: red;
}
</style>