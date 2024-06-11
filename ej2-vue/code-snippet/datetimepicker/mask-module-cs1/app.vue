<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-datetimepicker id="datetimepicker" :enableMask="true"></ejs-datetimepicker>
    </div>
  </div>
</template>
<script>

import { DateTimePickerComponent, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

export default {
  name: "App",
  components: {
    "ejs-datetimepicker": DateTimePickerComponent
  },
  data: function () {
    return {
    };
  },
  provide: {
    datetimepicker: [MaskedDateTime]
  }
};
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