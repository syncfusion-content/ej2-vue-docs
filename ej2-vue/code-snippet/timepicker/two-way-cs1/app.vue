<template>
  <div id="app">
    <div id="wrapper1">
      <ejs-timepicker id="timepicker" v-model="date"></ejs-timepicker>
    </div>
    <div id="wrapper2">
      <ejs-timepicker id="timepicker1" v-model="date"></ejs-timepicker>
    </div>
  </div>
</template>
<script>

import { TimePickerComponent } from "@syncfusion/ej2-vue-calendars";

export default {
  name: "App",
  components: {
    "ejs-timepicker": TimePickerComponent
  },
  data: function () {
    return {
      date: new Date()
    };
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/timepicker/index.css";

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