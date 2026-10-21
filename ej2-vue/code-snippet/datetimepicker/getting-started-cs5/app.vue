<template>
    <div id="app">
      <div class='wrapper'>
         <ejs-datetimepicker :placeholder="waterMark" ></ejs-datetimepicker>
      </div>
    </div>
</template>
<script>

import { DateTimePickerComponent } from '@syncfusion/ej2-vue-calendars';

export default {
name: "App",
components: {
"ejs-datetimepicker":DateTimePickerComponent
},
    data () {
    return {
      waterMark : 'Select a datetime'
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/datetimepicker/index.css";
   .wrapper {
    max-width: 250px;
    margin: 0 auto;
  }
</style>