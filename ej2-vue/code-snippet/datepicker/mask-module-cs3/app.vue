<template>
  <div id="app">
    <div class='wrapper1'>
      <!-- Specifies the masked datepicker without mask placeholder. -->
      <ejs-datepicker id="datepicker" :enableMask="true"></ejs-datepicker>
    </div>
    <div class='wrapper2'>
      <!-- Specifies the masked datepicker with mask placeholder. -->
      <ejs-datepicker id="placeholder" :enableMask="true" :maskPlaceholder='maskPlaceholderValue'></ejs-datepicker>
    </div>
  </div>
</template>
<script>

import { DatePickerComponent, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

export default {
  name: "App",
  components: {
    "ejs-datepicker": DatePickerComponent
  },
  data: function () {
    return {
      maskPlaceholderValue: { day: 'd', month: 'M', year: 'y' }
    }
  },
  provide: {
    datepicker: [MaskedDateTime]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/datepicker/index.css";

#wrapper1 {
  min-width: 250px;
  float: left;
  margin-left: 100px;
}

#wrapper2 {
  min-width: 250px;
  float: right;
  margin-right: 100px;
}
</style>