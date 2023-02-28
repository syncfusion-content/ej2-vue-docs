

<template>
  <div id="app">
        <div class='wrap'>
           <ejs-calendar id='calendar' locale='ar' enableRtl='true'></ejs-calendar>
        </div>
  </div>
</template>
<script>
import Vue from "vue";
import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';

Vue.use(CalendarPlugin);
loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

L10n.load({
    'ar': {
      'calendar': {  today: "اليوم"}
    }
});
export default {}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
 .wrap {
    margin: 0px auto;
    width: 240px;
}
</style>



