<template>
  <div id="app">
    <div id="wrapper1">
      <ejs-datepicker id="datepicker" v-model="date"></ejs-datepicker>
    </div>
    <div id="wrapper2">
      <ejs-datepicker id="datepicker1" v-model="date"></ejs-datepicker>
    </div>
  </div>
</template>
<script>

import { DatePickerComponent } from "@syncfusion/ej2-vue-calendars";


export default {
  name: "App",
  components: {
    "ejs-datepicker": DatePickerComponent
  },
  data: function () {
    return {
      date: new Date()
    };
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

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