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