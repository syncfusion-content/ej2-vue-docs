

<template>
  <div id="app">
   <div class='wrapper'>
    <ejs-calendar :min="minDate" :max="maxDate" :value="dateVal" ></ejs-calendar>
  </div>
  </div>
</template>
<script>
import { CalendarComponent } from '@syncfusion/ej2-vue-calendars';

export default {
  components: {
    'ejs-calendar': CalendarComponent
  },
  data () {
    return {
       minDate : new Date("05/09/2017"),
       maxDate : new Date("05/15/2017"),
       dateVal : new Date("05/11/2017")
    }
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
  .wrapper {
    max-width: 250px;
    margin: 0 auto;
  }
</style>


