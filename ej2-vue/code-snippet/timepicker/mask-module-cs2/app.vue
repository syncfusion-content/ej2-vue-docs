


<template>
<div id="app">
        <div class='wrapper1'>
         <!-- Specifies the masked timepicker without format property. -->
         <ejs-timepicker id="timepicker" :enableMask="true" ></ejs-timepicker>
     </div>
     <div class='wrapper2'>
          <!-- Specifies the masked timepicker with format property. -->
         <ejs-timepicker id="format" :enableMask="true" :format="dateFormat"></ejs-timepicker>
     </div>
  </div>
</template>
<script>
import Vue from "vue";
import { TimePickerPlugin, TimePicker, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

TimePicker.Inject(MaskedDateTime)
Vue.use(TimePickerPlugin);
export default{
  data() {
    return {
      dateFormat: 'hh:mm a'
    };
  },
  provide: {
      timepicker: [MaskedDateTime]
  }  
};
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
#wrapper1{
  min-width: 250px;
    float: left;
    margin-left: 100px;
}
#wrapper2{
  min-width: 250px;
    float: right;
     margin-right: 100px;
}
</style>


