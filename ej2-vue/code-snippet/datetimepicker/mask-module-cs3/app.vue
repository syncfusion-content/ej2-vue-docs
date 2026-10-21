<template>
  <div id="app">
    <div class='wrapper1'>
      <!-- Specifies the masked datetimepicker without mask placeholder. -->
      <ejs-datetimepicker id="datetimepicker" :enableMask="true"></ejs-datetimepicker>
    </div>
    <div class='wrapper2'>
      <!-- Specifies the masked datetimepicker with mask placeholder. -->
      <ejs-datetimepicker id="placeholder" :enableMask="true"
        :maskPlaceholder='maskPlaceholderValue'></ejs-datetimepicker>
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
      maskPlaceholderValue: { day: 'd', month: 'M', year: 'y', hour: 'h', minute: 'm', second: 's' }
    };
  },
  provide: {
    datetimepicker: [MaskedDateTime]
  }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/datetimepicker/index.css";

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