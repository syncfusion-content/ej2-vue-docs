<template>
    <div id="app">
      <div class='wrapper'>
         <ejs-datetimepicker :placeholder="waterMark" :serverTimezoneOffset="serverOffset" :value="dateVal" ></ejs-datetimepicker>
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
      waterMark : 'Select a datetime',
      serverOffset : 5.5,
      dateval: new Date()
      
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
   .wrapper {
    max-width: 250px;
    margin: 0 auto;
  }
</style>