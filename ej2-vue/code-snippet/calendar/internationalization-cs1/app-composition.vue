<template>
  <div id="app">
    <div class='wrap'>
      <ejs-calendar id='calendar' locale='de'></ejs-calendar>
    </div>
  </div>
</template>
<script setup>

import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { CalendarComponent as EjsCalendar } from "@syncfusion/ej2-vue-calendars";
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';


loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

L10n.load({
  'de': {
    'calendar': { today: 'heute' }
  }
});

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