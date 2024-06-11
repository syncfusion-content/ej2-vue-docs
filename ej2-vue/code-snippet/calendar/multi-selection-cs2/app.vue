<template>
  <div id="app">
    <div class='wrap'>
      <ejs-calendar id='calendar' ref="CalendarInstance" :isMultiSelection="isMultiSelection"
        :values="values"></ejs-calendar>
    </div>
  </div>
</template>
<script>

import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";


export default {
  name: "App",
  components: {
    "ejs-calendar": CalendarComponent
  },
  data() {
    return {
      isMultiSelection: true,
      values: [new Date('1/1/2020'), new Date('1/15/2020'), new Date('1/3/2020'), new Date('1/25/2020')]
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

.wrap {
  margin: 0px auto;
  max-width: 250px;
}
</style>