<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-datepicker id="datepicker" :enableMask="true"></ejs-datepicker>
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
    };
  },
  provide: {
    datepicker: [MaskedDateTime]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/datepicker/index.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>