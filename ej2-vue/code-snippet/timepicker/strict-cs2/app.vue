

<template>
  <div id="app">
        <div class='wrap'>
           <ejs-timepicker id='timepicker' :strictMode='Strict' :value='timeval' :min='minTime' :max='maxTime'></ejs-timepicker>
        </div>
  </div>
</template>
<script>
import Vue from "vue";
import { TimePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(TimePickerPlugin);
export default {
  data () {
    return{
        Strict: true,
        timeval:new Date('7/18/2017 3:00 PM'),
        minTime: new Date('7/18/2017 10:00 AM'),
        maxTime: new Date('7/18/2017 4:00 PM')
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
 .wrap {
    margin: 35px auto;
    width: 240px;
}
</style>


