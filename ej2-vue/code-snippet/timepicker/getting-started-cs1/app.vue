

<template>
    <div id="app">
      <div class='wrapper'>
        <ejs-timepicker :placeholder="waterMark"></ejs-timepicker>
      </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { TimePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(TimePickerPlugin);
export default {
  data () {
    return {
      waterMark : 'Select a time'
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
  .wrapper {
    max-width: 250px;
    margin: 0 auto;
  }
</style>


